// Stories that render a chat widget with a form extension
import React, { useEffect } from "react";
import type {
  EffectExtension,
  RenderExtension,
  VoiceflowExtension,
  ExtensionConfig,
} from "../types/extension";
import type { StoryObj } from "@storybook/react";

type Story = StoryObj<typeof HTMLDivElement>;

// Use with caution-- unstable :/
/**
 * Creates a Storybook story that renders a Voiceflow chat widget
 * @template T - The type of the trace payload
 * @template E - The type of Voiceflow extension (RenderExtension | EffectExtension)
 * @param tracePayload - The payload to be traced
 * @param extension - The Voiceflow extension to be used
 * @param projectId - The Voiceflow project ID
 * @param mode - The runtime mode ('development' or 'production')
 * @returns A Storybook story object
 */
export const createChatWidgetStory = <
  T extends unknown = unknown,
  E extends VoiceflowExtension = RenderExtension | EffectExtension
>(
  extension: E | E[],
  projectId: string,
  mode: "development" | "production" = "development"
): Story => {
  if (!projectId?.trim()) {
    throw new Error("projectId is required for createChatWidgetStory");
  }

  return {
    render: () => {
      useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.onload = () => {
          window.voiceflow.chat
            .load({
              verify: { projectID: projectId },
              url: "https://general-runtime.voiceflow.com",
              versionID: mode,
              assistant: {
                extensions: Array.isArray(extension) ? extension : [extension],
              },
            })
            .then(() => {
              window.voiceflow.chat.open();
            });
        };
        script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
        document.body.appendChild(script);

        return () => {
          document.querySelector("#voiceflow-chat")?.remove();
        };
      }, []);

      return <div style={{ width: "100%", height: "100vh" }} />;
    },
  };
};

const ExtensionDebugPanel: React.FC<{
  configId: string;
  payload: unknown;
  onPayloadChange?: (newPayload: unknown) => void;
}> = ({ configId, payload, onPayloadChange }) => {
  const [editablePayload, setEditablePayload] = React.useState(
    JSON.stringify(payload, null, 2)
  );
  const [error, setError] = React.useState<string | null>(null);

  const handlePayloadChange = (value: string) => {
    setEditablePayload(value);
    try {
      const parsed = JSON.parse(value);
      setError(null);
      onPayloadChange?.(parsed);
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
        <span>🔍</span>
        <span>Debug Panel</span>
      </div>
      <div style={{ marginBottom: "8px", color: "#666" }}>
        Extension ID: <span style={{ color: "#000" }}>{configId}</span>
      </div>
      <h2>Payload Data:</h2>
      <textarea
        value={editablePayload}
        onChange={(e) => handlePayloadChange(e.target.value)}
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
      <button
        onClick={() => {
          navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
          const btn = document.activeElement as HTMLButtonElement;
          const originalText = btn.innerText;
          btn.innerText = "✅ Copied!";
          setTimeout(() => {
            btn.innerText = originalText;
          }, 1000);
        }}
        style={{
          width: "100%",
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
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "#f0f0f0";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "#f8f8f8";
        }}
      >
        <span>📋</span>
        <span>Copy Payload</span>
      </button>
    </div>
  );
};

/**
 * Creates a Storybook story for rendering an extension
 * @template TPayload - The type of the extension payload
 * @template TConfig - The type of the extension configuration
 */
export const createExtensionStory = <
  TPayload = unknown,
  TConfig extends ExtensionConfig = ExtensionConfig
>(
  extension: RenderExtension<TPayload>,
  config: TConfig,
  initialPayload: TPayload,
  options?: {
    containerStyles?: React.CSSProperties;
  }
): Story => ({
  args: {
    showDebugPanel: true,
  },
  argTypes: {
    showDebugPanel: {
      control: "boolean",
      description: "Toggle debug panel visibility",
      defaultValue: true,
    },
  },
  render: ({ showDebugPanel = true }) => {
    const [containerRef, setContainerRef] =
      React.useState<HTMLDivElement | null>(null);
    const [currentPayload, setCurrentPayload] = React.useState(initialPayload);
    const cleanupRef = React.useRef<(() => void) | undefined>();

    React.useEffect(() => {
      if (!containerRef) return;

      // Cleanup previous render if it exists
      if (cleanupRef.current) {
        cleanupRef.current();
      }

      // Render with new payload
      setTimeout(() => {
        cleanupRef.current = extension.render({
          element: containerRef,
          trace: {
            type: config.id,
            payload: currentPayload,
          },
        });
      }, 0);

      return () => {
        setTimeout(() => {
          cleanupRef.current?.();
        }, 0);
      };
    }, [containerRef, currentPayload]);

    return (
      <>
        <div
          ref={setContainerRef}
          style={{
            ...options?.containerStyles,
          }}
        />
        {showDebugPanel && (
          <ExtensionDebugPanel
            configId={config.id}
            payload={currentPayload}
            // onPayloadChange={setCurrentPayload}
          />
        )}
      </>
    );
  },
});
