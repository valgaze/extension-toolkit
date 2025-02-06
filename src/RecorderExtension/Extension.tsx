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
import type { RenderExtension } from "../../util/types/extension";
import { extension_config, type ExtensionPayload } from "./config";
import RecorderComponent from "./component/RecorderComponent";
import styles from "./component/styles.css?inline";

export const RecorderExtension: RenderExtension<ExtensionPayload> = {
  name: extension_config.reference_name,
  type: "response",
  match: ({ trace }) =>
    trace.type === extension_config.id ||
    trace.payload?.name === extension_config.id,
  render: ({ element, trace }) => {
    // Create shadow root
    const shadow = element.attachShadow({ mode: "open" });
    const container = document.createElement("div");

    // Add styles to shadow DOM
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);
    shadow.appendChild(container);

    const root = ReactDOM.createRoot(container);
    const payload = trace.payload;

    // Wrap render in requestAnimationFrame to batch with React's updates
    root.render(<RecorderComponent {...payload} />);

    return () => {
      requestAnimationFrame(() => {
        root.unmount();
        while (shadow.firstChild) {
          shadow.removeChild(shadow.firstChild);
        }
      });
    };
  },
};
