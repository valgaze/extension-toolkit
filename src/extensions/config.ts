// STEP 1: Define the extension configuration
// id: The unique identifier for the extension (this is what you'll use to reference the extension in your voiceflow project)
// reference_name: Easy identifier, used to reference the extension in your widget code
// We specify this here to have a single source of truth for the extension configuration
export const extension_config = {
  id: "ext_react_form",
  reference_name: "MyExtension",
  supports_dark_mode: true,
};

// STEP 2: Define the extension payload type
// This is the data that will be passed to the extension from the canvas
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

export interface ExtensionPayload {
  title?: string;
  subtitle?: string;
  fields: FormField[];
  submitText?: string;
  theme?: "light" | "dark";
}
