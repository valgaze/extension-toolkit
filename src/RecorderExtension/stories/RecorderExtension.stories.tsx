import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createExtensionStory } from "../../../util/storybook/index.tsx";

// Extension and config
import { RecorderExtension } from "../Extension.tsx";
import { extension_config } from "../config.ts";
import type { ExtensionPayload } from "../config.ts";

const meta = {
  title: "Extensions/Recorder",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HTMLDivElement>;

export default meta;
type Story = StoryObj<typeof HTMLDivElement>;

const options = {
  containerStyles: {
    width: "320px", // Simulating chat widget width
  },
};

// Sample recorder payloads for stories
const recorders = {
  default: {
    title: "Record Your Screen",
  },
  customButtons: {
    title: "Share Your Experience",
    startButtonText: "Begin Screen Recording",
    stopButtonText: "End Recording",
    submitButtonText: "Share Recording with Support Team",
    retryButtonText: "Record Again",
  },
  darkTheme: {
    title: "Record Bug Report",
    startButtonText: "Start Recording",
    stopButtonText: "Stop",
    submitButtonText: "Submit Bug Report",
    retryButtonText: "Try Again",
    theme: "dark",
  },
  noTitle: {
    startButtonText: "Record",
    stopButtonText: "Stop",
    submitButtonText: "Send",
    retryButtonText: "Retry",
  },
  longText: {
    title: "Record a Video of Your Issue",
    startButtonText: "Start Recording Your Screen and Audio",
    stopButtonText: "Stop Recording Now",
    submitButtonText: "Submit Your Recording for Analysis by Our Support Team",
    retryButtonText: "Record a New Video",
  },
  withAudio: {
    title: "Record Screen & Audio",
    startButtonText: "Start Recording",
    stopButtonText: "Stop Recording",
    submitButtonText: "Submit Recording",
    retryButtonText: "Record Again",
    includeAudio: true,
  },
  videoOnly: {
    title: "Silent Screen Recording",
    startButtonText: "Start Screen Capture",
    stopButtonText: "Stop Capture",
    submitButtonText: "Submit Recording",
    retryButtonText: "Record Again",
    includeAudio: false,
  },
  fullConfig: {
    title: "Full Configuration Demo",
    startButtonText: "Start Recording",
    stopButtonText: "Stop Recording",
    submitButtonText: "Submit",
    retryButtonText: "Try Again",
    theme: "dark",
    includeAudio: true,
    includeVideo: true,
  },
  audioOnly: {
    title: "Voice Recording Only",
    startButtonText: "Start Voice Recording",
    stopButtonText: "Stop Recording",
    submitButtonText: "Submit Voice Note",
    retryButtonText: "Record Again",
    includeAudio: true,
    includeVideo: false,
  },
} satisfies Record<string, ExtensionPayload>;

// Stories
export const Default = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.default,
  options
);

export const CustomButtonText = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.customButtons,
  options
);

export const DarkTheme = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.darkTheme,
  {
    ...options,
    containerStyles: {
      ...options.containerStyles,
      background: "#000000",
      padding: "1rem",
    },
  }
);

export const NoTitle = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.noTitle,
  options
);

export const LongButtonText = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.longText,
  options
);

export const WithAudio = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.withAudio,
  options
);

export const VideoOnly = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.videoOnly,
  options
);

export const FullConfiguration = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.fullConfig,
  {
    ...options,
    containerStyles: {
      ...options.containerStyles,
      background: "#000000",
      padding: "1rem",
    },
  }
);

export const AudioOnly = createExtensionStory<ExtensionPayload>(
  RecorderExtension,
  extension_config,
  recorders.audioOnly,
  {
    ...options,
    containerStyles: {
      ...options.containerStyles,
      background: "#f5f5f5",
      padding: "1rem",
    },
  }
);
