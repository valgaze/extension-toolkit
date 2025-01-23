import type { ExtensionConfig } from "../../util/types/extension.ts";

// STEP 1: Define the extension configuration

// Configuration interface for Voiceflow Extensions
// Defines the required properties to register and identify an extension within the Voiceflow
// This configuration enables proper integration with the Voiceflow canvas and LLM understanding.
export const extension_config: ExtensionConfig = {
  id: "ext_react_form",
  reference_name: "MyExtension",
  supports_dark_mode: true,
  description: "A form extension to capture user inputs",
};

// STEP 2: Define the extension payload type or "props"
// This is the data that will be passed to the extension from the canvas
export type ExtensionPayload = {
  [key: string]: unknown;
  title?: string;
  subtitle?: string;
  fields: FormField[];
  submitText?: string;
  theme?: "light" | "dark";
};

export interface FormField {
  name: string;
  type: "text" | "email" | "tel" | "number" | "password" | "textarea";
  label?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}
