import React from "react";

interface RenderDebugPanelProps {
  configId: string;
  payload: unknown;
}

export const RenderDebugPanel: React.FC<RenderDebugPanelProps> = ({
  configId,
  payload,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        padding: "12px",
        maxWidth: "400px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        fontFamily: "monospace",
        fontSize: "12px",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#666",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? "🔽" : "▶️ (tap to expand)"}</span>
          <span>Extension Payload</span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            padding: "4px 8px",
            background: copied ? "#4CAF50" : "#f8f8f8",
            color: copied ? "white" : "inherit",
            cursor: "pointer",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            if (!copied) {
              e.currentTarget.style.background = "#f0f0f0";
            }
          }}
          onMouseOut={(e) => {
            if (!copied) {
              e.currentTarget.style.background = "#f8f8f8";
            }
          }}
        >
          <span>{copied ? "✓" : "📋"}</span>
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      {isExpanded && (
        <>
          <div style={{ marginBottom: "8px", color: "#666" }}>
            Extension ID: <span style={{ color: "#000" }}>{configId}</span>
          </div>
          <div
            style={{
              background: "#f5f5f5",
              padding: "12px",
              borderRadius: "4px",
              maxHeight: "300px",
              overflow: "auto",
            }}
          >
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {JSON.stringify(payload, null, 2)}
            </pre>
          </div>
        </>
      )}
    </div>
  );
};
