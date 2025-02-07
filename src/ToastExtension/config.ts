import type { ExtensionConfig } from "../../util/types/extension";
import type { ToastT } from "sonner";

export const extension_config: ExtensionConfig = {
  id: "ext_toast",
  reference_name: "ToastExtension",
  supports_dark_mode: true,
  description: "A toast notification extension powered by Sonner",
};

export type Position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

// Base toast options shared by all toast types
export interface BaseToastOptions {
  description?: string;
  duration?: number;
  className?: string;
  position?: Position;
  dismissible?: boolean;
  closeButton?: boolean;
  style?: {
    background?: string;
    color?: string;
    padding?: string;
    borderRadius?: string;
    border?: string;
    boxShadow?: string;
    fontSize?: string;
    fontWeight?: string;
  };
}

// Action button configuration
export interface ActionButton {
  label: string;
  style?: {
    background?: string;
    color?: string;
    padding?: string;
    borderRadius?: string;
  };
}

// Cancel button configuration
export interface CancelButton {
  label: string;
  style?: {
    background?: string;
    color?: string;
    padding?: string;
    borderRadius?: string;
  };
}

// Promise toast configuration
export interface PromiseToastOptions {
  loading: string;
  success: string;
  error: string;
}

// Extension payload type that includes all possible toast configurations
export type ExtensionPayload = {
  type: "default" | "success" | "error" | "loading" | "promise" | "custom";
  message: string | (() => JSX.Element);
  options?: Omit<
    ToastT,
    "id" | "title" | "jsx" | "type" | "promise" | "delete"
  > & {
    position?: Position;
    action?: ActionButton;
    cancel?: CancelButton;
  };
  promiseOptions?: PromiseToastOptions;
};
