import React, { useState, useRef, useEffect } from "react";
import type {
  ExtensionPayload,
  RecordingState,
  RecorderInteraction,
  RecorderErrorPayload,
  RecorderSuccessPayload,
} from "../config";
import { RecorderError } from "../config";

// List of MIME types to try in order of preference
const MIME_TYPES = [
  "video/webm",
  "video/webm;codecs=vp8,opus",
  "video/webm;codecs=vp9,opus",
  "video/mp4",
];

const getSupportedMimeType = () => {
  return MIME_TYPES.find((type) => MediaRecorder.isTypeSupported(type)) || "";
};

const RecorderComponent: React.FC<ExtensionPayload> = ({
  title = "Screen Recording",
  startButtonText = "Start Recording",
  stopButtonText = "Stop Recording",
  submitButtonText = "Submit",
  retryButtonText = "Try Again",
  theme = "light",
}) => {
  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const interact = (interaction: RecorderInteraction) => {
    window.voiceflow?.chat?.interact(interaction);
  };

  const handleError = (error: RecorderError | string) => {
    const errorPayload: RecorderErrorPayload = {
      id: typeof error === "string" ? RecorderError.RECORDING_FAILED : error,
      details: typeof error === "string" ? error : undefined,
    };
    interact({ type: "error", payload: errorPayload });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      const mimeType = getSupportedMimeType();
      if (!mimeType) {
        throw new Error("No supported MIME type found");
      }

      streamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType,
      });

      recordedChunksRef.current = []; // Clear any previous recording data

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onerror = () => {
        handleError("MediaRecorder failed during recording");
      };

      mediaRecorderRef.current.onstop = () => {
        try {
          streamRef.current?.getTracks().forEach((track) => track.stop());

          const blob = new Blob(recordedChunksRef.current, { type: mimeType });

          // Kill previous preview URL if it exists
          if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
          }

          const newPreviewUrl = URL.createObjectURL(blob);
          setPreviewUrl(newPreviewUrl);

          if (videoRef.current) {
            videoRef.current.src = newPreviewUrl;
          }

          setRecordingState("preview");
        } catch (error) {
          handleError(
            error instanceof Error
              ? error.message
              : "Failed to process recording"
          );
        }
      };

      mediaRecorderRef.current.start(100); // Reduced interval for smoother recording
      setRecordingState("recording");
    } catch (error) {
      console.error("Recording error:", error);
      if (error instanceof Error) {
        if (error.name === "NotAllowedError") {
          handleError(RecorderError.PERMISSION_DENIED);
        } else if (error.message === "No supported MIME type found") {
          handleError(RecorderError.DEVICE_NOT_SUPPORTED);
        } else {
          handleError(error.message);
        }
      } else {
        handleError(RecorderError.RECORDING_FAILED);
      }
      setRecordingState("idle");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recordingState === "recording") {
      try {
        mediaRecorderRef.current.stop();
      } catch (error) {
        handleError(
          error instanceof Error ? error.message : "Failed to stop recording"
        );
        setRecordingState("idle");
      }
    }
  };

  const submitRecording = () => {
    try {
      const mimeType = mediaRecorderRef.current?.mimeType || "video/webm";
      const blob = new Blob(recordedChunksRef.current, { type: mimeType });
      const successPayload: RecorderSuccessPayload = {
        mimeType,
        recordingData: blob,
      };
      interact({ type: "complete", payload: successPayload });
      setIsSubmitted(true);
    } catch (error) {
      handleError(
        error instanceof Error ? error.message : "Failed to submit recording"
      );
    }
  };

  const resetRecording = () => {
    // Clean up preview URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl("");
    }

    recordedChunksRef.current = [];
    if (videoRef.current) {
      videoRef.current.src = "";
    }
    setRecordingState("idle");
    setIsSubmitted(false);
  };

  return (
    <div className={`recorder-ext-wrapper ${theme}`}>
      <div className="recorder-ext-container">
        {title && <h2 className="recorder-ext-title">{title}</h2>}

        <div className="recorder-ext-video-container">
          <video
            ref={videoRef}
            className="recorder-ext-preview"
            controls
            style={{ display: recordingState === "preview" ? "block" : "none" }}
            playsInline // Add playsinline for iOS
          />
        </div>

        <div className="recorder-ext-controls">
          {recordingState === "idle" && (
            <button
              className="recorder-ext-button recorder-ext-start"
              onClick={startRecording}
            >
              {startButtonText}
            </button>
          )}

          {recordingState === "recording" && (
            <button
              className="recorder-ext-button recorder-ext-stop"
              onClick={stopRecording}
            >
              {stopButtonText}
            </button>
          )}

          {recordingState === "preview" && (
            <div className="recorder-ext-button-group">
              <button
                className={`recorder-ext-button recorder-ext-submit ${
                  isSubmitted ? "submitted" : ""
                }`}
                onClick={submitRecording}
                disabled={isSubmitted}
              >
                {submitButtonText}
              </button>
              <button
                className="recorder-ext-button recorder-ext-retry"
                onClick={resetRecording}
              >
                {retryButtonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecorderComponent;
