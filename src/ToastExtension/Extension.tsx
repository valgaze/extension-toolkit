import { toast, Toaster } from "sonner";
import { z } from "zod/v4";

import { extension_config, type ExtensionPayload } from "./config";
import * as ReactDOM from "react-dom/client";
import React from "react";

import { createEffectExtension } from "../../util/extensions";

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

// Position enum
const PositionSchema = z.enum([
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
]);

// Reusable style schema, basically React.CSSProperties
const StyleSchema = z.object({
  background: z.string().optional(),
  color: z.string().optional(),
  padding: z.string().optional(),
  borderRadius: z.string().optional(),
  border: z.string().optional(),
  boxShadow: z.string().optional(),
  fontSize: z.string().optional(),
  fontWeight: z.string().optional(),
});

// Toast options schema (clean, JSON-only)
const ToastOptionsSchema = z.object({
  description: z.string().optional(),
  duration: z.number().optional(),
  className: z.string().optional(),
  position: PositionSchema.optional(),
  dismissible: z.boolean().optional(),
  closeButton: z.boolean().optional(),
  style: StyleSchema.optional(),
});

// Main extension props
export const inputs = z.object({
  type: z
    .enum(["default", "success", "error", "loading", "custom"])
    .default("default"),
  message: z.string(),
  options: ToastOptionsSchema.optional(),
});

export const ToastExtension = createEffectExtension({
  id: extension_config.id,
  inputs,
  name: "Toast Extension",
  llmDescription: `An extension which will pop up a custom toast on the user's screen`,
  effect({ inputs }) {
    const { type, message, options = {} } = inputs; // inputs is same as trace.payload
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

    // Generally you do not send data back with an effects extension but you could
  },
});
