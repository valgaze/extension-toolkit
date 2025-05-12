// Zod tricks
import { z, ZodError } from "zod/v4";
import type { ZodType } from "zod/v4";
export { z };

import {
  type VoiceflowTrace,
  type ExtensionMeta,
  type EffectExtensionMeta,
  type EffectsExtension,
  type RenderExtension,
  type RenderActions,
  type EffectsExtensionProps,
  LOOKUP_KEY,
  ExtensionType,
} from "./types";
import { lovelyChatProps } from "./types";
// Stash LLMDescription and other values via this symbol
export const META_KEY = Symbol("extensionMeta");

// Shared bridge implementation for render + effects extension
/*
All the below will FAIL validation if payload is not wrapped in object
```ts
    window.voiceflow?.chat?.interact({
      type: "complete",
      payload: 555,
    });

    window.voiceflow?.chat?.interact({
      type: "complete",
      payload: "beer",
    });

    window.voiceflow?.chat?.interact({
      type: "complete",
      payload: null,
    });

    window.voiceflow?.chat?.interact({
      type: "complete",
      payload: ["a", "b", "c"],
    });
```
*/
const createBridge = <TOutput = unknown>(
  trace: any,
  outputSchema?: ZodType<TOutput>
) => {
  const wrapPayload = (input: unknown) => {
    // sending a string, array, number, null will fail so wrap in an object if not provided explicitly
    if (typeof input === "object" && input !== null && !Array.isArray(input)) {
      return input;
    }
    return { message: input };
  };

  const normalize = (
    arg1: unknown,
    arg2?: unknown
  ): { type: string; payload: unknown } => {
    if (typeof arg1 === "string") {
      return { type: arg1, payload: wrapPayload(arg2) };
    }

    if (
      typeof arg1 === "object" &&
      arg1 !== null &&
      "type" in arg1 &&
      "payload" in arg1
    ) {
      const { type, payload } = arg1 as { type: string; payload: unknown };
      return { type, payload: wrapPayload(payload) };
    }

    throw new Error(
      "Invalid sendRaw signature. Expected (type, payload) or { type, payload }"
    );
  };

  const sendRaw = (
    typeOrObj: string | { type: string; payload: unknown },
    payload?: unknown
  ) => {
    const normalized = normalize(typeOrObj, payload);
    if (window.voiceflow?.chat.interact) {
      window.voiceflow.chat.interact(normalized);
    } else {
      console.error("Voiceflow chat context not found");
    }
  };

  return {
    sendRaw,
    debug: (...args: any[]) => {
      if (trace?.payload?.[LOOKUP_KEY]?.logs) {
        console.log(...args);
      }
    },
    complete: (payload: TOutput) => {
      const shouldEnforceSchema = trace?.payload?.[LOOKUP_KEY].schema;

      if (shouldEnforceSchema && outputSchema) {
        try {
          const validated = outputSchema.parse(payload);
          sendRaw("complete", validated);
        } catch (e) {
          console.log(e); // schemaerrors for bridge.complete should always log
          sendRaw("error", {
            schemaError: true,
            schemaErrors: e,
          });
        }
      } else {
        sendRaw("complete", payload);
      }
    },
    fail: (error: unknown) => sendRaw("error", error),
  };
};

export function createExtension<TSchema extends ZodType, TOutput = unknown>({
  id,
  name,
  llmDescription,
  inputs,
  outputs,
  render,
  match,
  enforceSchema = false,
}: ExtensionMeta<TSchema, TOutput>): RenderExtension {
  const nameFallback = name ?? id;
  // Actual render function delievered to widget decorated with niceness
  const wrappedRender = ({
    trace,
    element,
  }: {
    trace: VoiceflowTrace<z.infer<TSchema>>;
    element: HTMLElement;
  }) => {
    const bridgeHelpers = createBridge<TOutput>(trace, outputs);
    // 🌟 Ensure $config exists with defaults (even if missing or partial)
    trace.payload.$config = lovelyChatProps.parse(trace.payload.$config ?? {});

    // trace.payload?.$config?.schema can be undefined, true, or false
    const schemaOverride = trace.payload?.$config?.schema;
    // if schemaOverride is true/false honor that otherwise fallback to default in code
    const shouldEnforceSchema =
      schemaOverride !== undefined ? schemaOverride : enforceSchema;

    try {
      // .transform trick to exempt $config from inputs parsing
      const parsedPayload = shouldEnforceSchema
        ? inputs.parse(
            ((o) => {
              const { $config, ...rest } = o;
              return rest;
            })(trace.payload)
          )
        : trace.payload;

      return render({
        bridge: bridgeHelpers as RenderActions<TOutput>,
        inputs: {
          ...(parsedPayload as z.infer<TSchema> & Record<string, unknown>),
          $config: trace.payload.$config,
        },
        element,
        trace,
      });
    } catch (err) {
      /**
       * If the error is a ZodError, it will be replaced with the error messages
       * from the ZodError. If not, the original error is reported.
       */
      if (err instanceof ZodError) {
        const errorDetails = {
          schemaError: true,
          schemaErrors: err,
        };

        if (trace.payload.$config.error !== "interact") {
          bridgeHelpers.debug(
            `[Schema Error, invalid inputs provided to extension: ${
              name ? name + " [" + id + "]" : id
            }] failed to render`,
            err
          );
        } else {
          bridgeHelpers.fail(errorDetails);
        }
      } else {
        // non-zod errors
        if (trace.payload.$config.error !== "interact") {
          bridgeHelpers.debug(
            `[Extension: ${
              name ? name + " [" + id + "]" : id
            }] failed to render`,
            err
          );
        } else {
          bridgeHelpers.fail(err);
        }
      }
    }
  };

  Object.defineProperty(wrappedRender, META_KEY, {
    value: { id, llmDescription, inputs, outputs, enforceSchema },
    enumerable: false,
    writable: false,
  });

  const backupMatch = ({ trace }: { trace: VoiceflowTrace<TSchema> }) =>
    [trace.type, trace.payload?.name].includes(id);

  return {
    type: ExtensionType.RESPONSE,
    name: name ?? id,
    render: wrappedRender,
    match: match ?? backupMatch,
  };
}

export function createEffectExtension<
  TSchema extends ZodType,
  TOutput = unknown
>({
  id,
  name,
  llmDescription,
  inputs,
  outputs,
  effect,
  match,
  enforceSchema = false,
}: EffectExtensionMeta<TSchema, TOutput>): EffectsExtension<z.infer<TSchema>> {
  const nameFallback = name ?? id;

  // Actual render function delievered to widget decorated with niceness
  const wrappedRender = (
    props: EffectsExtensionProps<z.infer<TSchema>, TOutput>
  ) => {
    const bridgeHelpers = createBridge<TOutput>(props.trace, outputs);

    // 🌟 Ensure $config exists with defaults (even if missing or partial)
    props.trace.payload.$config = lovelyChatProps.parse(
      props.trace.payload.$config ?? {}
    );

    // props.trace.payload?.$config?.schema can be true, or false, defaults to false if empty
    const schemaOverride = props.trace.payload?.$config?.schema;

    // Extensions will ALWAYS defer to props.trace.payload.$config from conversation diagram

    // schemaOverride is true/false honor that otherwise fallback to enforceSchema specified in extension code
    const shouldEnforceSchema =
      schemaOverride !== undefined ? schemaOverride : enforceSchema;

    try {
      // .transform trick to exempt $config from inputs parsing
      const parsedPayload = shouldEnforceSchema
        ? inputs.parse(
            ((o) => {
              const { $config, ...rest } = o;
              return rest;
            })(props.trace.payload)
          )
        : props.trace.payload;

      return effect({
        bridge: bridgeHelpers as RenderActions<TOutput>,
        inputs: {
          ...(parsedPayload as z.infer<TSchema> & Record<string, unknown>),
          $config: props.trace.payload.$config,
        },
        trace: props.trace,
      });
    } catch (err) {
      /**
       * If the error is a ZodError, it will be replaced with the error messages
       * from the ZodError. If not, the original error is reported.
       */
      if (err instanceof ZodError) {
        const errorDetails = {
          schemaError: true,
          schemaErrors: err,
        };

        if (props.trace.payload.$config.error !== "interact") {
          bridgeHelpers.debug(
            `[Schema Error, invalid inputs provided to extension: ${
              name ? name + " [" + id + "]" : id
            }] failed to render`,
            err
          );
        } else {
          bridgeHelpers.fail(errorDetails);
        }
      } else {
        // non-zod errors
        if (props.trace.payload.$config.error !== "interact") {
          bridgeHelpers.debug(
            `[Extension: ${
              name ? name + " [" + id + "]" : id
            }] failed to render`,
            err
          );
        } else {
          bridgeHelpers.fail(err);
        }
      }
    }
  };

  Object.defineProperty(wrappedRender, META_KEY, {
    value: { id, llmDescription, inputs, outputs, enforceSchema },
    enumerable: false,
    writable: false,
  });

  const backupMatch = ({ trace }: { trace: VoiceflowTrace<TSchema> }) =>
    [trace.type, trace.payload?.name].includes(id);

  return {
    type: ExtensionType.EFFECT,
    name: name ?? id,
    effect: wrappedRender,
    match: match ?? backupMatch,
  };
}
