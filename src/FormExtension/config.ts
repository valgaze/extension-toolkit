/*
 * 🔧 EXTENSION CONFIG 🔧
 * ====================
 *
 * 🚀 Core configuration file for Voiceflow Extensions:
 * - Defines extension metadata and settings
 * - Specifies data structures for extension props
 */

import type { ExtensionConfig } from "../../util/types/extension";

// 1️⃣ Extension Identity & Settings
// Core configuration for extension registration
export const extension_config: ExtensionConfig = {
  id: "ext_react_form",
  reference_name: "MyExtension",
  supports_dark_mode: false,
  description: `## Form Extension:
<use_case>
    Use this tool to create dynamic forms with various input types including text, email, number, 
    checkboxes, radio buttons, and more. Supports custom validation and styling.
</use_case>
<important_notes>
    1. Each field must have a unique name property
    2. Required fields can be marked with the required property
    3. Custom validation can be added using pattern, minLength, and maxLength properties
    4. For select/radio/checkbox inputs, provide options array with possible values
</important_notes>`,
};

// 2️⃣ Extension Props Interface
// Data structure passed from Voiceflow to extension
export type ExtensionPayload = {
  title?: string;
  subtitle?: string;
  fields: FormField[];
  submitText?: string;
  theme?: "light" | "dark";
};

// Helper interface for form fields
interface FormField {
  name: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "number"
    | "password"
    | "textarea"
    | "radio"
    | "checkbox"
    | "select"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "range"
    | "color"
    | "file"
    | "hidden"
    | "image"
    | "reset"
    | "submit"
    | "button";
  label?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}
