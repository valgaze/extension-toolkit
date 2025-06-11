import type { ExtensionConfig } from "../../util/types/extension";
import type { ToastT } from "sonner";

export const extension_config: ExtensionConfig = {
  id: "ext_toast",
  reference_name: "ToastExtension",
  supports_dark_mode: true,
  description: `## Toast Notification Extension:
<use_case>
    Use this tool to display non-intrusive toast notifications to users. Supports various 
    notification types including success, error, loading, and custom messages.
</use_case>
<important_notes>
    1. Notifications can be positioned in different screen locations
    2. Custom duration can be set for each notification
    3. Supports dismissible notifications with close buttons
    4. Custom styling can be applied to match your application's theme
    5. Supports both light and dark themes
</important_notes>`,
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
