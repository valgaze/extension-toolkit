/**
 * Star Rater Extension
 *
 * This extension creates a star rating component that allows users to:
 * 1. Rate something on a scale of 1 to N stars
 * 2. Optionally provide a comment
 * 3. Customize labels for the rating scale
 *
 * The extension uses React for rendering and Zod for input/output validation.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { extension_config } from "./config";
import styles from "./styles.css?inline";
import { createExtension } from "../../util/extensions/index";
import { z } from "zod/v4";
import type { RenderActions } from "../../util/extensions/types";

/**
 * Input Schema Definition
 * Defines the expected input parameters for the extension:
 * - question: Optional question to display above the rating
 * - maxRating: Optional maximum rating value (defaults to 5)
 * - labels: Optional custom labels for the rating scale
 * - commentPrompt: Optional prompt for collecting additional feedback
 */
const inputs = z.object({
  question: z.string().describe("Question to ask the user").optional(),
  maxRating: z.number().optional().describe("Maximum rating value"),
  labels: z
    .object({
      low: z.string().optional().describe("Label for lowest rating"),
      high: z.string().optional().describe("Label for highest rating"),
    })
    .optional()
    .describe("Custom labels for rating scale"),
  commentPrompt: z.string().optional(),
});

/**
 * Output Schema Definition
 * Defines the data that will be returned when the rating is submitted:
 * - rating: The selected rating value
 * - comment: Optional comment provided by the user
 */
const outputs = z.object({
  rating: z.number(),
  comment: z.string().optional(),
});

// Type definitions derived from Zod schemas
export type ExtensionPayload = z.infer<typeof inputs>;
type ExtensionOutputPayload = z.infer<typeof outputs>;

/**
 * Extension Definition
 * Creates the extension with its configuration and rendering logic.
 * The render function sets up the shadow DOM and React root.
 */
export const StarRaterExtension = createExtension({
  name: extension_config.reference_name,
  llmDescription: extension_config.description,
  id: extension_config.id,
  inputs,
  outputs: outputs,
  render: ({ bridge, element, trace }) => {
    // Create shadow root for style isolation
    const shadow = element.attachShadow({ mode: "open" });
    const container = document.createElement("div");

    // Inject styles into shadow DOM
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);
    shadow.appendChild(container);

    // Initialize React root and render component
    const root = ReactDOM.createRoot(container);
    const payload = trace.payload;
    root.render(<StarRaterComponent {...payload} bridge={bridge} />);

    // Cleanup function to unmount React and remove shadow DOM
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

/**
 * Star Rater Component
 * The main React component that renders the star rating interface.
 *
 * Features:
 * - Interactive star rating selection
 * - Optional comment input
 * - Custom labels for rating scale
 * - Loading state handling
 * - Accessibility support
 */
const StarRaterComponent: React.FC<
  ExtensionPayload & {
    bridge: RenderActions<ExtensionOutputPayload>;
  }
> = ({ question, maxRating = 5, labels, commentPrompt, bridge }) => {
  // State management
  const [selectedRating, setSelectedRating] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Handle star rating selection
  const handleRatingClick = (rating: number) => {
    if (isSubmitting) return;
    setSelectedRating(rating);
    // If no comment prompt, submit immediately
    if (!commentPrompt) {
      bridge.complete({ rating });
      setIsSubmitting(true);
    }
  };

  // Handle form submission with rating and optional comment
  const handleSubmit = () => {
    setIsSubmitting(true);
    bridge.complete({
      rating: selectedRating,
      comment: comment.trim() || undefined,
    });
  };

  return (
    <div
      className="vf-rating-container"
      style={{
        position: "relative",
        pointerEvents: isSubmitting ? "none" : undefined,
        cursor: isSubmitting ? "not-allowed" : undefined,
      }}
    >
      {/* Loading overlay when submitting */}
      {isSubmitting && (
        <div
          className="vf-rating-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255,255,255,0.6)",
            zIndex: 10,
            pointerEvents: "all",
            cursor: "not-allowed",
            borderRadius: "8px",
          }}
        />
      )}

      {/* Question display */}
      <p className="vf-rating-question">{question}</p>

      {/* Star rating interface */}
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
              style={{ cursor: isSubmitting ? "not-allowed" : undefined }}
            >
              &#9733;
            </button>
          ))}
        </div>
        {labels?.high && (
          <span className="vf-rating-label-high">{labels.high}</span>
        )}
      </div>

      {/* Optional comment input */}
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
            style={{ cursor: isSubmitting ? "not-allowed" : undefined }}
          />
          <button
            className="vf-submit-button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{ cursor: isSubmitting ? "not-allowed" : undefined }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
