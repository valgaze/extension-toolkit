/*
 * 🔧 RECORDER EXTENSION CONFIG 🔧
 * ============================
 *
 * Configuration and types for the screen recording extension
 */

import type { ExtensionConfig } from "../../util/types/extension";

// Core configuration
export const extension_config: ExtensionConfig = {
  id: "ext_recorder",
  reference_name: "RecorderExtension",
  supports_dark_mode: true,
  description:
    "A screen recording extension for capturing and submitting video feedback",
};

// Extension payload type
export type ExtensionPayload = {
  title?: string;
  startButtonText?: string;
  stopButtonText?: string;
  submitButtonText?: string;
  retryButtonText?: string;
  theme?: "light" | "dark";
};

// Recording state type
export type RecordingState = "idle" | "recording" | "preview" | "uploading";

// Error types
export enum RecorderError {
  PERMISSION_DENIED = "PERMISSION_DENIED",
  DEVICE_NOT_SUPPORTED = "DEVICE_NOT_SUPPORTED",
  RECORDING_FAILED = "RECORDING_FAILED",
}

export interface RecorderErrorPayload {
  id: RecorderError;
  details?: string;
}

export interface RecorderSuccessPayload {
  mimeType: string;
  recordingData: Blob;
}

export type RecorderInteraction =
  | {
      type: "error";
      payload: RecorderErrorPayload;
    }
  | {
      type: "complete";
      payload: RecorderSuccessPayload;
    };
