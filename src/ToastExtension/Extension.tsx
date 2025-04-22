import { toast, Toaster } from "sonner";
import type {
  EffectExtension,
  VoiceflowTrace,
} from "../../util/types/extension";
import { extension_config, type ExtensionPayload } from "./config";
import * as ReactDOM from "react-dom/client";
import React from "react";

// Default toast styles
const defaultStyle = {
  background: "#ffffff",
  color: "#1a1a1a",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  fontSize: "14px",
  fontWeight: "500",
};

// Initialize Toaster once at startup
((isBrowser: boolean) => {
  const containerId = "sonner-toast-container";
  if (!isBrowser || document.getElementById(containerId)) return;

  const container = document.createElement("div");
  container.id = containerId;
  container.style.position = "fixed";
  container.style.inset = "0";
  container.style.pointerEvents = "none";
  container.style.zIndex = "999999";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    React.createElement(Toaster, {
      expand: true,
      richColors: true,
      closeButton: true,
      toastOptions: {
        style: { ...defaultStyle, pointerEvents: "auto" },
        duration: 4000,
      },
    })
  );
})(typeof document !== "undefined");

export const ToastExtension: EffectExtension = {
  name: extension_config.reference_name,
  type: "effect",
  match: ({ trace }: { trace: VoiceflowTrace<unknown> }) =>
    trace.type === extension_config.id ||
    trace.payload?.name === extension_config.id,
  effect: async ({ trace }: { trace: VoiceflowTrace<unknown> }) => {
    const { type, message, options = {} } = trace.payload as ExtensionPayload;
    const toastOptions = {
      ...options,
      style: { ...defaultStyle, ...options.style },
    };

    switch (type) {
      case "success":
        toast.success(message, toastOptions);
        break;
      case "error":
        toast.error(message, toastOptions);
        break;
      case "loading":
        toast.loading(message, toastOptions);
        break;
      default:
        toast(message, toastOptions);
    }
  },
};
