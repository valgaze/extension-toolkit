/*
 * 🎯 FORM EXTENSION EXPORT 🎯
 * ==========================
 *
 * ⚠️ REQUIREMENTS: Export must include:
 * {
 *   name: string            - Unique identifier from config
 *   type: "response"        - Renders form in response to trace
 *   match: (props) => bool  - Matches trace type/payload name
 *   render: (props) => void - Renders form in shadow DOM
 * }
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { z } from "zod/v4";
import { extension_config } from "./config";
import FormComponent from "./component/FormComponent.tsx";
import styles from "./component/styles.css?inline";
import { createExtension } from "../../util/extensions/index";

const inputs = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  fields: z.array(
    z.object({
      name: z.string(),
      type: z.enum([
        "text",
        "email",
        "tel",
        "number",
        "password",
        "textarea",
        "radio",
        "checkbox",
        "select",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "range",
        "color",
        "file",
        "hidden",
        "image",
        "reset",
        "submit",
        "button",
      ]),
      label: z.string().optional(),
      placeholder: z.string().optional(),
      required: z.boolean().optional(),
      pattern: z.string().optional(),
      minLength: z.number().optional(),
      maxLength: z.number().optional(),
      options: z.array(z.string()).optional(), // for radio/checkbox/select
    })
  ),
  submitText: z.string().optional(),
  theme: z.enum(["light", "dark"]).optional(),
});

export type ExtensionPayload = z.infer<typeof inputs>;

export const FormExtension = createExtension({
  id: extension_config.id,
  name: extension_config.reference_name,
  llmDescription: extension_config.description,
  inputs,
  render: ({ inputs, element }) => {
    // Create shadow root
    const shadow = element.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    // Add styles to shadow DOM
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);
    shadow.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(<FormComponent {...inputs} />);
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
