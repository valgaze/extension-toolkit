import { z } from "zod/v4";
import type { ZodType } from "zod/v4";

// Special config on payload available under $config

/**
 * Configuration schema for the lovely chat widget.
 * Defines settings related to logging, validation, error handling, and appearance.
 */
export const lovelyChatProps = z
  .object({
    /**
     * Whether to show debug logs in the console.
     * If enabled, logs relevant actions for debugging.
     * @default true
     */
    logs: z
      .boolean()
      .describe("Show debug logs in the console if enabled")
      .default(true),

    /**
     * Whether Zod validation is applied before rendering.
     * If set to true, Zod will validate the inputs against the provided schema.
     * If validation fails, an error will be thrown.
     * @default true
     */
    schema: z
      .boolean()
      .describe(
        `Whether Zod validation is applied before calling render (ie throw an error if the inputs provided to your extension don't match your provided schema).`
      )
      .default(false),

    /**
     * How errors should be handled.
     * - 'console': Logs the error to the console.
     * - 'interact': Displays the error in the chat interaction UI.
     * If 'console' is chosen but logs are disabled, no logs will be displayed.
     * @default "interact"
     */
    error: z
      .enum(["console", "interact"])
      .describe(
        "How errors should be handled, if console is selected but logs are disabled no logs"
      )
      .default("interact"),

    /**
     * A hint to determine if the widget should be displayed in dark mode.
     * If enabled, the widget will switch to dark mode styling.
     * @default false
     */
    dark: z
      .boolean()
      .describe("Hint to determine if widget should be in dark mode")
      .default(false),
  })
  .passthrough(); // Allows extra fields not defined in the schema

export const LOOKUP_KEY = "$config";

export type TraceEvent = {
  type: string; // or you can use a union of known types e.g. "default" | "error"
};

export type TracePath = {
  event: TraceEvent;
};
export type VoiceflowTrace<T = unknown> = {
  time: number;
  type: string;
  payload: {
    $config: z.infer<typeof lovelyChatProps>;
    name?: string; // legacy: old docs have convention for extension on payload.name
  } & T;
  defaultPath: number;
  paths: TracePath[];
};

// For core render function that goes to chat widget
type BaseRenderProps<T = unknown> = {
  trace: VoiceflowTrace<T>;
  element: HTMLElement;
};

// "Bridge" helpers
export type RenderActions<TOutput = unknown> = {
  /** Log debug info (e.g. for console output) */
  debug: (...args: any[]) => void;

  /** Send a 'complete' response to Voiceflow. If no object specified as payload it will be wrapped as { message: payload } */
  complete: (payload: TOutput) => void;

  /** Send an 'error' response to Voiceflow */
  fail: (error: unknown) => void;

  /** Send a custom payload + type to Voiceflow */
  sendRaw(type: string, payload: unknown): void;
  sendRaw(message: { type: string; payload: unknown }): void;
};

// Parameters for createExtension({trace, element, bridge, data})
export type RenderExtensionProps<
  T = unknown,
  TOutput = unknown
> = BaseRenderProps<T> & {
  bridge: RenderActions<TOutput>;
  inputs: T;
};

// Parameters for all match functions (optional by default)
export type MatchFuncProps<TSchema extends ZodType, TOutput = unknown> = Omit<
  RenderExtensionProps<TSchema, TOutput>,
  "bridge" | "element" | "inputs"
>;

// Note: Effects extensions don't render anything so no {element} available
export type EffectsExtensionProps<T = unknown, TOutput = unknown> = Omit<
  RenderExtensionProps<T, TOutput>,
  "element"
> & {
  bridge: RenderActions<TOutput>;
};

export type RenderFunc<TSchema extends ZodType, TOutput = unknown> = (
  props: RenderExtensionProps<z.infer<TSchema>, TOutput>
) => void | (() => void);

export type EffectsFunc<TSchema extends ZodType, TOutput = unknown> = (
  props: EffectsExtensionProps<z.infer<TSchema>, TOutput>
) => void | (() => void);

export type MatchFunc<TSchema extends ZodType, TOutput = unknown> = (
  props: MatchFuncProps<z.infer<TSchema>, TOutput>
) => boolean;

// Args for createExtension (which makes renderExtensions)
export type ExtensionMeta<
  TSchema extends ZodType = ZodType,
  TOutput = unknown
> = {
  /**
   * Unique identifier for the extension, used on the canvas.
   * Common examples: "ext_form", "ext_starrater" (but doesn't require that prefix).
   */
  id: string;

  /**
   * Optional name of the extension.
   * This is used in LLM-facing descriptions and tooling.
   */
  name?: string;

  /**
   * Description of what the extension does, shown to the LLM.
   */
  llmDescription: string;

  /**
   * Zod schema that defines the expected input shape for this extension.
   */
  inputs: TSchema;

  /**
   * Optional Zod schema that defines the expected output shape.
   */
  outputs?: ZodType<TOutput>;

  /**
   * Whether or not to enforce input validation via the Zod schema.
   * Defaults to false if not specified.
   */
  enforceSchema?: boolean;

  /**
   * Function that renders the extension.
   * Called with: { trace, element, bridge, data }
   */
  render: RenderFunc<TSchema, TOutput>;

  /**
   * Optional matching function that determines when to use this extension.
   */
  match?: MatchFunc<TSchema, TOutput>;
};

// Args to createEffectsExtension
export type EffectExtensionMeta<
  TSchema extends ZodType,
  TOutput = unknown
> = Omit<ExtensionMeta<TSchema, TOutput>, "render"> & {
  effect: EffectsFunc<TSchema, TOutput>;
};

export enum ExtensionType {
  EFFECT = "effect",
  RESPONSE = "response",
}

// return type of createExtension
export type RenderExtension = {
  type: ExtensionType.RESPONSE;
  match({ trace }: { trace: VoiceflowTrace }): boolean;
  render(props: BaseRenderProps): void | (() => void);
  name?: string;
};

// return type of createEffectExtension
export type EffectsExtension<T = unknown> = {
  type: ExtensionType.EFFECT;
  match({ trace }: { trace: VoiceflowTrace }): boolean;
  effect(props: EffectsExtensionProps<T>): void | (() => void);
  name?: string;
};

// Errors
export const SchemaError = z.object({
  type: z.literal("schema"),
  message: z.string(),
  missing: z.array(z.string()).optional(),
  invalid: z.array(z.string()).optional(),
});

export type SchemaError = z.infer<typeof SchemaError>;

export const samplError: SchemaError = {
  type: "schema",
  message: "Missing required fields",
  missing: ["name"],
};

// build an error
const llmErrorMaker = (error: SchemaError) => {
  const template = `There was an error with the provided values
  
  ${
    error.message.length > 0
      ? error.message
      : `The following required values are missing: ${error.missing?.join(
          ", "
        )}`
  }
  
  ${
    (error.invalid?.length || 0) > 0
      ? `The following values were provided but invalid ${error.invalid?.join(
          ", "
        )}`
      : ""
  }
  `;
  return {
    type: "error",
    payload: error,
    message: template,
  };
};
