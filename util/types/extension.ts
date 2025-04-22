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
    name?: string;
  } & T; // legacy: old docs have convention for extension on payload.name
  defaultPath: number;
  paths: TracePath[];
};

export interface ExtensionRenderProps<T = unknown> {
  trace: VoiceflowTrace<T>;
  element: HTMLElement;
}

interface BaseVoiceflowExtension<T = unknown> {
  name: string;
  match: (props: { trace: VoiceflowTrace<T> }) => boolean;
}

export type RenderExtension<T = unknown> = BaseVoiceflowExtension<T> & {
  type: "response";
  render: (props: ExtensionRenderProps<T>) => void | (() => void);
};

export interface EffectExtension extends BaseVoiceflowExtension {
  type: "effect";
  effect: (props: { trace: VoiceflowTrace }) => Promise<void> | void;
}

export type VoiceflowExtension = RenderExtension | EffectExtension;

// // buildResponse extension
// export const buildResponseExtension = <T = unknown>(config: ExtensionConfig) => {
//   return {
//     name: config.reference_name,
//     type: "response",
//     match: ({ trace }) => [trace.type, trace.payload?.name].includes(config.id),
//     render: ({ element, trace }) => {
//       // Create shadow root
//       const shadow = element.attachShadow({ mode: "open" });
//       const container = document.createElement("div");

//       // Add styles to shadow DOM
//       const styleElement = document.createElement("style");
//       styleElement.textContent = styles;
//       shadow.appendChild(styleElement);
//       shadow.appendChild(container);

//       const root = ReactDOM.createRoot(container);
//       const payload = trace.payload;

//       // Wrap render in requestAnimationFrame to batch with React's updates
//       root.render(<FormComponent {...payload} />);

//       return () => {
//         requestAnimationFrame(() => {
//           root.unmount();
//           while (shadow.firstChild) {
//             shadow.removeChild(shadow.firstChild);
//           }
//         });
//       };
//     },
//   };
// };

// export const FormExtension: RenderExtension<ExtensionPayload> = {
//   name: extension_config.reference_name,
//   type: "response",
//   match: ({ trace }) => [trace.type, trace.payload?.name].includes(extension_config.id),
//   render: ({ element, trace }) => {
//     // Create shadow root
//     const shadow = element.attachShadow({ mode: "open" });
//     const container = document.createElement("div");

//     // Add styles to shadow DOM
//     const styleElement = document.createElement("style");
//     styleElement.textContent = styles;
//     shadow.appendChild(styleElement);
//     shadow.appendChild(container);

//     const root = ReactDOM.createRoot(container);
//     const payload = trace.payload;
