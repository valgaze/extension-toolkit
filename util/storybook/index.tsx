// Stories that render a chat widget with a form extension
import React from "react";
import type { StoryObj } from "@storybook/react";
import { RenderDebugPanel } from "./RenderDebugPanel";
import type {
  RenderExtension,
  VoiceflowTrace,
  RenderActions,
  RenderExtensionProps,
} from "../extensions/types";
import type { ExtensionMeta } from "../extensions/types";

type Story = StoryObj<typeof HTMLDivElement>;

export { EffectDebugPanel } from "./EffectDebugPanel";

interface ExtensionStoryOptions {
  containerStyles?: React.CSSProperties;
}

/**
 * Creates a Storybook story for rendering an extension
 * @template TPayload - The type of the extension payload
 */
export function createExtensionStory<T>(
  extension: RenderExtension,
  config: ExtensionMeta<any>,
  payload: T,
  options: ExtensionStoryOptions = {}
): StoryObj<typeof HTMLDivElement> {
  return {
    render: () => {
      const element = document.createElement("div");
      const { containerStyles = {} } = options;

      Object.assign(element.style, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        padding: "20px",
        ...containerStyles,
      });

      const trace: VoiceflowTrace = {
        type: config.id,
        payload: {
          ...payload,
          $config: {
            logs: true,
            schema: true,
            error: "console",
            dark: false,
          },
        },
        time: Date.now(),
        defaultPath: 0,
        paths: [],
      };

      const bridge: RenderActions<unknown> = {
        complete: () => {},
        fail: console.error,
        debug: console.log,
        sendRaw: () => {},
      };

      const renderProps: RenderExtensionProps<unknown> = {
        trace,
        element,
        bridge,
        inputs: trace.payload,
      };

      extension.render?.(renderProps);

      return (
        <div style={{ width: "100%" }}>
          {React.createElement("div", {
            ref: (node) => node && node.appendChild(element),
          })}
          <RenderDebugPanel configId={config.id} payload={payload} />
        </div>
      );
    },
  };
}

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
