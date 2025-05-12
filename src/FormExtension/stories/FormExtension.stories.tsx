import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createExtensionStory } from "../../../util/storybook/index.tsx";
import ExtensionDocs from "../../../util/storybook/ExtensionDocs";

// Extension and config
import { FormExtension } from "../Extension.tsx";
import { extension_config } from "../config.ts";
import { forms } from "./story_data.ts";

// Define the field type to match the schema
type FormField = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  options?: string[]; // for radio/checkbox/select
};

type ExtensionPayload = {
  title?: string;
  subtitle?: string;
  fields: FormField[];
  submitText?: string;
  theme?: "light" | "dark";
};

const meta = {
  title: "Extensions/Form",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HTMLDivElement>;

export default meta;

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

export const VideoBuilder = createExtensionStory<ExtensionPayload>(
  FormExtension,
  extension_config,
  forms.VideoBuilder,
  options
);

// Documentation story that shows the extension's description and prompt
export const Prompts: StoryObj<typeof HTMLDivElement> = {
  render: () => <ExtensionDocs extension={FormExtension} />,
};
