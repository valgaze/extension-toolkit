// Voiceflow helpers

/**
 * Configuration interface for Voiceflow Extensions.
 * Defines the required properties to register and identify an extension
 * within the Voiceflow platform. This configuration enables proper integration
 * with the Voiceflow canvas and LLM understanding.
 */
export interface ExtensionConfig {
  /** Unique identifier used to invoke this extension from the Voiceflow canvas */
  id: string;
  /** Human-readable name for the extension (not used programmatically) */
  reference_name: string;
  /** Optional flag to indicate if the extension supports dark mode theming */
  supports_dark_mode?: boolean;
  /** Description of the extension's functionality, used by LLMs to understand when to use this extension */
  description: string;
}

declare global {
  interface Window {
    voiceflow: {
      chat: {
        interact: (interaction: { type: string; payload: unknown }) => void;
        open: () => void;
        close: () => void;
        load: (options: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          assistant: { extensions: VoiceflowExtension[] };
        }) => Promise<void>;
      };
    };
  }
}

export interface VoiceflowTrace<T = unknown> {
  type: string;
  payload: {
    name?: string;
  } & T;
}

export interface ExtensionRenderProps<T = unknown> {
  trace: VoiceflowTrace<T>;
  element: HTMLElement;
}

interface BaseVoiceflowExtension<T = unknown> {
  name: string;
  match: (props: { trace: VoiceflowTrace<T> }) => boolean;
}

export interface RenderExtension<T = unknown>
  extends BaseVoiceflowExtension<T> {
  type: "response";
  render: (props: ExtensionRenderProps<T>) => void | (() => void);
}

export interface EffectExtension extends BaseVoiceflowExtension {
  type: "effect";
  effect: (props: { trace: VoiceflowTrace }) => Promise<void> | void;
}

export type VoiceflowExtension = RenderExtension | EffectExtension;
