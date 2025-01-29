import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createExtensionStory } from "../../../util/storybook/index.tsx";

// Story data
import { forms } from "./story_data.ts";

// Extension
import { FormExtension } from "../Extension.tsx";
// Extension Config

import { extension_config } from "../config.ts";
import type { ExtensionPayload } from "../config.ts";

// Meta
const meta: Meta<typeof HTMLDivElement> = {
  title: "FormExtension",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HTMLDivElement>;

const options = {
  containerStyles: {
    width: "550px",
  },
};

// Build stories
export const ContactForm = createExtensionStory<ExtensionPayload>(
  FormExtension,
  extension_config,
  forms.contactForm,
  options
);
export const FeedbackForm = createExtensionStory<ExtensionPayload>(
  FormExtension,
  extension_config,
  forms.feedbackForm,
  options
);
export const SubscriptionForm = createExtensionStory<ExtensionPayload>(
  FormExtension,
  extension_config,
  forms.subscriptionForm,
  options
);

export const VideoBuilder = createExtensionStory<ExtensionPayload>(
  FormExtension,
  extension_config,
  forms.VideoBuilder,
  options
);
