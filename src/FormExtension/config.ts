/*
 * 🔧 EXTENSION CONFIG 🔧
 * ====================
 *
 * 🚀 Core configuration file for Voiceflow Extensions:
 * - Defines extension metadata and settings
 * - Specifies data structures for extension props
 */

import type { ExtensionConfig } from "../../util/types/extension.ts";

// 1️⃣ Extension Identity & Settings
// Core configuration for extension registration
export const extension_config: ExtensionConfig = {
  id: "ext_react_form",
  reference_name: "MyExtension",
  supports_dark_mode: false,
  description: "A form extension to capture user inputs",
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
