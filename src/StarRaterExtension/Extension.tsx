import React from "react";
import ReactDOM from "react-dom/client";
import { extension_config } from "./config";
// import type { ExtensionPayload } from "./config";
import styles from "./styles.css?inline";
import { createExtension } from "../../util/extensions/index";
import { z } from "zod";


const inputs = z.object({
question: z.string().describe("Question to ask the user").optional(),
maxRating: z.number().optional().describe("Maximum rating value"),
labels: z.object({
  low: z.string().optional().describe("Label for lowest rating"),
  high: z.string().optional().describe("Label for highest rating"),
}).optional().describe("Custom labels for rating scale"),
commentPrompt: z.string().optional(),
});

// derived type from zod schema (make it nice to write)
type ExtensionPayload = z.infer<typeof inputs>;

export const StarRaterExtension = createExtension({
  name: extension_config.reference_name,
  llmDescription: extension_config.description,
  id: extension_config.id,
  inputs,
  render: ({ bridge, element, trace, }) => {
    // Create shadow root
    const shadow = element.attachShadow({ mode: "open" });
    const container = document.createElement("div");

    // Add styles to shadow DOM
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);
    shadow.appendChild(container);

    const root = ReactDOM.createRoot(container);
    const payload = trace.payload;

    // Wrap render in requestAnimationFrame to batch with React's updates
    root.render(<StarRaterComponent {...payload} />);

    return () => {
      requestAnimationFrame(() => {
        root.unmount();
        while (shadow.firstChild) {
          shadow.removeChild(shadow.firstChild);
        }
      });
    };
  },
});

const StarRaterComponent: React.FC<ExtensionPayload> = ({
  question,
  maxRating = 5,
  labels,
  commentPrompt,
}) => {
  const [selectedRating, setSelectedRating] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleRatingClick = (rating: number) => {
    if (isSubmitting) return;
    setSelectedRating(rating);
    if (!commentPrompt) {
      window.voiceflow.chat.interact({
        type: "complete",
        payload: { rating },
      });
      setIsSubmitting(true);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    window.voiceflow.chat.interact({
      type: "complete",
      payload: {
        rating: selectedRating,
        comment: comment.trim() || undefined,
      },
    });
  };

  return (
    <div
      className="vf-rating-container"
      style={{
        position: 'relative',
        pointerEvents: isSubmitting ? 'none' : undefined,
        cursor: isSubmitting ? 'not-allowed' : undefined,
      }}
    >
      {isSubmitting && (
        <div
          className="vf-rating-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.6)',
            zIndex: 10,
            pointerEvents: 'all',
            cursor: 'not-allowed',
            borderRadius: '8px',
          }}
        />
      )}
      <p className="vf-rating-question">{question}</p>
      <div className="vf-star-rating">
        {labels?.low && (
          <span className="vf-rating-label-low">{labels.low}</span>
        )}
        <div className="vf-stars">
          {Array.from({ length: maxRating }, (_, i) => i + 1).map((rating) => (
            <button
              key={rating}
              className={`vf-star ${
                selectedRating >= rating ? "vf-star-active" : ""
              }`}
              onClick={() => handleRatingClick(rating)}
              aria-label={`${rating} out of ${maxRating} stars`}
              disabled={isSubmitting}
              style={{ cursor: isSubmitting ? 'not-allowed' : undefined }}
            >
              &#9733;
            </button>
          ))}
        </div>
        {labels?.high && (
          <span className="vf-rating-label-high">{labels.high}</span>
        )}
      </div>
      {commentPrompt && selectedRating > 0 && (
        <div className="vf-comment-box">
          <label htmlFor="vf-comment-input">{commentPrompt}</label>
          <textarea
            id="vf-comment-input"
            rows={3}
            placeholder="Your feedback (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={isSubmitting}
            style={{ cursor: isSubmitting ? 'not-allowed' : undefined }}
          />
          <button
            className="vf-submit-button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{ cursor: isSubmitting ? 'not-allowed' : undefined }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};


