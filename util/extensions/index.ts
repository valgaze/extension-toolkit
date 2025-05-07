// Zod tricks
import { z, ZodError } from 'zod' 
import type {ZodTypeAny} from 'zod'
export { z }

import {type VoiceflowTrace, type ExtensionMeta, type RenderExtension,LOOKUP_KEY, ExtensionType} from './types'
import {lovelyChatProps} from './types'
// Stash LLMDescription and other values via this symbol
export const META_KEY = Symbol('extensionMeta');

export function createExtension<TSchema extends ZodTypeAny>({
  id,
  name,
  llmDescription,
  inputs,
  outputs,
  render,
  match,
  enforceSchema = false,
}: ExtensionMeta<TSchema>): RenderExtension {
  const nameFallback = name ?? id
  // Actual render function delievered to widget decorated with niceness
  const wrappedRender = ({trace, element}:{trace: VoiceflowTrace, element: HTMLElement}) => {
    // 🌟 Ensure $config exists with defaults (even if missing or partial)
    trace.payload.$config = lovelyChatProps.parse(trace.payload.$config ?? {});

    // Bridge implementation
    const bridgeHelpers = {
      sendRaw(payload: {type: string, payload: unknown}) {
        if (window.voiceflow?.chat.interact) {
          window.voiceflow.chat.interact(payload);
        } else {
          console.error('Voiceflow chat context not found')
        }
      },
      debug(...args: any[]) {
        if (trace.payload?.[LOOKUP_KEY]?.logs) {
          console.log(...args);
        }
      },
      complete(payload: unknown) {
        this.sendRaw({ type: 'complete', payload });
      },
      fail(error: unknown) {
        this.sendRaw({ type: 'error', payload: error });
      },
    }
    // trace.payload?.$config?.schema can be undefined, true, or false
    const schemaOverride = trace.payload?.$config?.schema;
    // if schemaOverride is true/false honor that otherwise fallback to default in code 
    const shouldEnforceSchema = schemaOverride !== undefined ? schemaOverride : enforceSchema;

    try {
      // .transform trick to exempt $config from inputs parsing
      const parsedPayload = shouldEnforceSchema
        ? inputs.parse(((o) => { const { $config, ...rest } = o; return rest; })(trace.payload))
        : trace.payload;

      return render({
        bridge: bridgeHelpers,
        data: {...parsedPayload, $config: trace.payload.$config}, // if any transforms occurred they'll be here, trace.payload never touched
        element,
        trace,
      })
    } catch (err) {
      /**
         * If the error is a ZodError, it will be replaced with the error messages
         * from the ZodError. If not, the original error is reported.
         */
      if (err instanceof ZodError) {
        const parsePayload = err.errors.map(zodError => {
          return {
            key: zodError.path.at(-1),
            code: zodError.code,
            message: zodError.message,
          }
        })

        const errorDetails = {
          schemaError: true,
          schemaErrors: parsePayload
        }

        if (trace.payload.$config.error !== 'interact') {
          bridgeHelpers.debug(`[Schema Error, invalid inputs provided to extension: ${name ? name + ' [' + id + ']' : id}] failed to render`, err);
        } else {
          bridgeHelpers.fail(errorDetails)
        }
      } else {
        // non-zod errors
        if (trace.payload.$config.error !== 'interact') {
          bridgeHelpers.debug(`[Extension: ${name ? name + ' [' + id + ']' : id}] failed to render`, err);
        } else {
          bridgeHelpers.fail(err)
        }
      }
    }
  }

  Object.defineProperty(wrappedRender, META_KEY, {
    value: { id, llmDescription, inputs, outputs, enforceSchema },
    enumerable: false,
    writable: false,
  });

  const backupMatch =  ({ trace }: { trace: VoiceflowTrace<TSchema> }) =>
    [trace.type, trace.payload?.name].includes(id)

  return {
    type: ExtensionType.RESPONSE,
    name: name ?? id,
    render: wrappedRender,
    match: match ?? backupMatch
  };
}
