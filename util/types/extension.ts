// Voiceflow helpers

declare global {
  interface Window {
    voiceflow: {
      chat: {
        interact: (interaction: { type: string; payload: unknown }) => void;
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
  render: (props: ExtensionRenderProps<T>) => void;
}

export interface EffectExtension extends BaseVoiceflowExtension {
  type: "effect";
  effect: (props: { trace: VoiceflowTrace }) => Promise<void> | void;
}

export type VoiceflowExtension = RenderExtension | EffectExtension;
