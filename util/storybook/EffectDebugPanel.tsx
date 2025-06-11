import React from "react";

interface EffectDebugPanelProps {
  configId: string;
  payload: unknown;
  onTrigger: (payload: unknown) => void;
}

export const EffectDebugPanel: React.FC<EffectDebugPanelProps> = ({
  configId,
  payload,
  onTrigger,
}) => {
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
        <span>🔧</span>
        <span>Effect Debug Panel</span>
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
          <span>▶️</span>
          <span>Trigger Effect</span>
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
