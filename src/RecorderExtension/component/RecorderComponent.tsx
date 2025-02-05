import React, { useState, useRef } from "react";
import type { ExtensionPayload, RecordingState } from "../config";
import { RecorderError } from "../config";

const RecorderComponent: React.FC<ExtensionPayload> = ({
  title = "Screen Recording",
  startButtonText = "Start Recording",
  stopButtonText = "Stop Recording",
  submitButtonText = "Submit",
  retryButtonText = "Try Again",
  theme = "light",
}) => {
  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const handleError = (error: RecorderError) => {
    window.voiceflow?.chat?.interact({
      type: "error",
      payload: {
        id: error,
      },
    });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: "video/webm",
        });
        if (videoRef.current) {
          videoRef.current.src = URL.createObjectURL(blob);
        }
        setRecordingState("preview");

        // Clean up the stream
        streamRef.current?.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setRecordingState("recording");
    } catch (error) {
      if (error instanceof Error && error.name === "NotAllowedError") {
        handleError(RecorderError.PERMISSION_DENIED);
      } else {
        handleError(RecorderError.RECORDING_FAILED);
      }
      setRecordingState("idle");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recordingState === "recording") {
      mediaRecorderRef.current.stop();
      recordedChunksRef.current = [];
    }
  };

  const submitRecording = () => {
    const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
    window.voiceflow?.chat?.interact({
      type: "complete",
      payload: {
        recording: blob,
      },
    });
  };

  const resetRecording = () => {
    recordedChunksRef.current = [];
    if (videoRef.current) {
      videoRef.current.src = "";
    }
    setRecordingState("idle");
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
                className="recorder-ext-button recorder-ext-submit"
                onClick={submitRecording}
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
