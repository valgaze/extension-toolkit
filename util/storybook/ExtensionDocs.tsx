import React from "react";
import {
  describeExtension,
  generateExtensionPrompt,
} from "../extensions/describe";
import type {
  RenderExtension,
  EffectsExtension,
} from "../../util/extensions/types";

interface ExtensionDocsProps {
  extension: RenderExtension | EffectsExtension;
  showDescription?: boolean;
  showPrompt?: boolean;
}

const ExtensionDocs: React.FC<ExtensionDocsProps> = ({
  extension,
  showDescription = true,
  showPrompt = true,
}) => {
  const description = showDescription ? describeExtension(extension) : null;
  const prompt = showPrompt ? generateExtensionPrompt(extension) : null;

  return (
    <div
      style={{ fontFamily: "monospace", padding: "1rem", maxWidth: "800px" }}
    >
      {showPrompt && (
        <div>
          <h3>Extension Prompt</h3>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              borderRadius: "4px",
              whiteSpace: "pre-wrap",
            }}
          >
            {prompt}
          </pre>
        </div>
      )}

      <hr />
      {showDescription && (
        <div style={{ marginBottom: "2rem" }}>
          <h3>Extension Description (JSON)</h3>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              borderRadius: "4px",
              whiteSpace: "pre-wrap",
            }}
          >
            {JSON.stringify(description, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ExtensionDocs;
