/*
 * 🎥 RECORDER EXTENSION EXPORT 🎥
 * =============================
 *
 * ⚠️ REQUIREMENTS: Export must include:
 * {
 *   name: string            - Unique identifier from config
 *   type: "response"        - Renders recorder in response to trace
 *   match: (props) => bool  - Matches trace type/payload name
 *   render: (props) => void - Renders recorder in shadow DOM
 * }
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { z } from "zod";
import { extension_config } from "./config";
import RecorderComponent from "./component/RecorderComponent";
import styles from "./component/styles.css?inline";
import { createExtension } from "../../util/extensions/index";

const inputs = z.object({
  title: z.string().optional(),
  startButtonText: z.string().optional(),
  stopButtonText: z.string().optional(),
  submitButtonText: z.string().optional(),
  retryButtonText: z.string().optional(),
  theme: z.enum(["light", "dark"]).optional(),
  includeAudio: z.boolean().optional(),
  includeVideo: z.boolean().optional(),
});

export type ExtensionPayload = z.infer<typeof inputs>;

export const RecorderExtension = createExtension({
  id: extension_config.id,
  name: extension_config.reference_name,
  llmDescription: extension_config.description,
  inputs,
  render: ({ data, element }) => {
    // Create shadow root
    const shadow = element.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    // Add styles to shadow DOM
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);
    shadow.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(<RecorderComponent {...data} />);
    return () => {
      requestAnimationFrame(() => {
        root.unmount();
        while (shadow.firstChild) {
          shadow.removeChild(shadow.firstChild);
        }
      });
    };
  },
});
