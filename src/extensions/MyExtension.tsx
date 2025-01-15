import React from "react";
import ReactDOM from "react-dom/client";
import type { RenderExtension } from "../../util/types/extension";
import { extension_config, type ExtensionPayload } from "./config";
import FormComponent from "./FormComponent";
import styles from "./MyExtension.css?inline";

export const FormExtension: RenderExtension<ExtensionPayload> = {
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
    const payload = trace.payload?.payload || trace.payload;
    root.render(<FormComponent {...payload} />);

    return () => {
      root.unmount();
    };
  },
};
