import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createExtensionStory } from "../../../util/storybook/index.tsx";
import ExtensionDocs from "../../../util/storybook/ExtensionDocs";

// Extension and config
import { StarRaterExtension } from "../Extension.tsx";
import { extension_config } from "../config.ts";
import type { ExtensionPayload } from "../Extension.tsx";

const meta = {
  title: "Extensions/StarRater",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HTMLDivElement>;

export default meta;

// Basic rating
export const Basic = createExtensionStory<ExtensionPayload>(
  StarRaterExtension,
  extension_config,
  {
    question: "How would you rate this extension?",
  }
);

// Rating with custom max stars
export const CustomMaxStars = createExtensionStory<ExtensionPayload>(
  StarRaterExtension,
  extension_config,
  {
    question: "Rate your experience (1-10)",
    maxRating: 10,
  }
);

// Rating with custom labels
export const CustomLabels: StoryObj<typeof HTMLDivElement> =
  createExtensionStory(StarRaterExtension, extension_config, {
    question: "How satisfied are you with our product?",
    labels: {
      low: "Very Dissatisfied",
      high: "Very Satisfied",
    },
  });

// Rating with comment prompt
export const WithComment = createExtensionStory<ExtensionPayload>(
  StarRaterExtension,
  extension_config,
  {
    question: "How would you rate our customer support?",
    commentPrompt: "Please tell us what we could improve",
  }
);

// Complete example with all features
export const Complete = createExtensionStory<ExtensionPayload>(
  StarRaterExtension,
  extension_config,
  {
    question: "Rate your overall experience with our platform",
    maxRating: 7,
    labels: {
      low: "Terrible",
      high: "Amazing",
    },
    commentPrompt: "We'd love to hear your detailed feedback",
  }
);

// Documentation story that shows the extension's description and prompt
export const Prompts: StoryObj<typeof HTMLDivElement> = {
  render: () => <ExtensionDocs extension={StarRaterExtension} />,
};
