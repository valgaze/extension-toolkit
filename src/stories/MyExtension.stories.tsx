import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  createExtensionStory,
  createChatWidgetStory,
} from "../../util/storybook/index.tsx";
import { forms } from "./story_data.ts";

// Extension
import { FormExtension } from "../extensions/MyExtension.tsx";
import { extension_config } from "../extensions/config.ts";
import type { ExtensionPayload } from "../extensions/config.ts";
import type { RenderExtension } from "../../util/types/extension.ts";

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
