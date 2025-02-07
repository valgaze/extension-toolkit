import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToastExtension } from "../Extension";
import { extension_config } from "../config";
import type { ExtensionPayload } from "../config";

const meta = {
  title: "Extensions/Toast",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HTMLDivElement>;

export default meta;
type Story = StoryObj<typeof HTMLDivElement>;

// Debug panel component for effect extensions
const EffectDebugPanel: React.FC<{
  configId: string;
  payload: ExtensionPayload;
  onTrigger: (payload: ExtensionPayload) => void;
}> = ({ configId, payload, onTrigger }) => {
  const [editablePayload, setEditablePayload] = React.useState(
    JSON.stringify(payload, null, 2)
  );
  const [error, setError] = React.useState<string | null>(null);

  const handleTrigger = () => {
    try {
      const parsed = JSON.parse(editablePayload);
      setError(null);
      onTrigger(parsed);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "rgba(255, 255, 255, 0.95)",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "400px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontFamily: "monospace",
        fontSize: "12px",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          marginBottom: "12px",
          fontWeight: "bold",
          color: "#666",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>🔔</span>
        <span>Toast Debug Panel</span>
      </div>
      <div style={{ marginBottom: "8px", color: "#666" }}>
        Extension ID: <span style={{ color: "#000" }}>{configId}</span>
      </div>
      <textarea
        value={editablePayload}
        onChange={(e) => setEditablePayload(e.target.value)}
        style={{
          width: "100%",
          minHeight: "200px",
          fontFamily: "monospace",
          fontSize: "12px",
          padding: "8px",
          border: `1px solid ${error ? "#ff0000" : "#eee"}`,
          borderRadius: "4px",
          background: "#f5f5f5",
          marginBottom: error ? "4px" : "12px",
        }}
      />
      {error && (
        <div
          style={{ color: "#ff0000", marginBottom: "12px", fontSize: "11px" }}
        >
          {error}
        </div>
      )}
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={handleTrigger}
          style={{
            flex: 1,
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            padding: "6px 12px",
            background: "#f8f8f8",
            cursor: "pointer",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <span>🔔</span>
          <span>Show Toast</span>
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(editablePayload);
            const btn = document.activeElement as HTMLButtonElement;
            const originalText = btn.innerText;
            btn.innerText = "✅ Copied!";
            setTimeout(() => {
              btn.innerText = originalText;
            }, 1000);
          }}
          style={{
            flex: 1,
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            padding: "6px 12px",
            background: "#f8f8f8",
            cursor: "pointer",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <span>📋</span>
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};

// Create a story template for effect extensions
const createEffectStory = (payload: ExtensionPayload): Story => ({
  render: () => {
    const handleTrigger = (payload: ExtensionPayload) => {
      ToastExtension.effect?.({
        trace: {
          type: extension_config.id,
          payload: {
            name: extension_config.id,
            ...payload,
          },
        },
      });
    };

    return (
      <>
        <div style={{ padding: "20px" }}>
          <h3>Toast Extension Demo</h3>
          <p>Use the debug panel to trigger and customize toasts.</p>
        </div>
        <EffectDebugPanel
          configId={extension_config.id}
          payload={payload}
          onTrigger={handleTrigger}
        />
      </>
    );
  },
});

// Sample toast payloads - all JSON serializable
const toasts = {
  default: {
    type: "default",
    message: "Hello from toast!",
    options: {
      duration: 4000,
    },
  },
  success: {
    type: "success",
    message: "Operation completed successfully",
    options: {
      description: "Your changes have been saved",
      style: {
        background: "#E8F5E9",
        border: "1px solid #81C784",
        color: "#2E7D32",
      },
    },
  },
  error: {
    type: "error",
    message: "Something went wrong",
    options: {
      description: "Please try again later",
      duration: 5000,
      style: {
        background: "#FFEBEE",
        border: "1px solid #E57373",
        color: "#C62828",
        borderRadius: "8px",
      },
    },
  },
  modern: {
    type: "default",
    message: "Modern Style Toast",
    options: {
      description: "With a sleek design",
      style: {
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },
  gradient: {
    type: "default",
    message: "Gradient Style Toast",
    options: {
      description: "With a beautiful gradient background",
      style: {
        background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        color: "white",
        borderRadius: "16px",
        padding: "16px 20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 12px 24px rgba(99, 102, 241, 0.2)",
      },
    },
  },
  customPosition: {
    type: "default",
    message: "Custom Position Toast",
    options: {
      position: "top-center",
      description: "This toast appears at the top center",
      style: {
        background: "#F3E8FF",
        border: "1px solid #C084FC",
        color: "#6B21A8",
        borderRadius: "8px",
        padding: "12px 16px",
      },
    },
  },
  minimal: {
    type: "default",
    message: "Minimal Toast",
    options: {
      style: {
        background: "#F4F4F5",
        color: "#18181B",
        borderRadius: "6px",
        padding: "12px",
        fontSize: "13px",
        border: "none",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  branded: {
    type: "success",
    message: "Brand-Themed Toast",
    options: {
      description: "Using your brand colors",
      style: {
        background: "#0EA5E9",
        color: "white",
        borderRadius: "8px",
        padding: "16px",
        border: "1px solid #0284C7",
        boxShadow: "0 8px 16px rgba(14, 165, 233, 0.15)",
        fontSize: "14px",
      },
    },
  },
} satisfies Record<string, ExtensionPayload>;

// Stories
export const Default = createEffectStory(toasts.default);
export const Success = createEffectStory(toasts.success);
export const Error = createEffectStory(toasts.error);
export const Modern = createEffectStory(toasts.modern);
export const Gradient = createEffectStory(toasts.gradient);
export const CustomPosition = createEffectStory(toasts.customPosition);
export const Minimal = createEffectStory(toasts.minimal);
export const Branded = createEffectStory(toasts.branded);
