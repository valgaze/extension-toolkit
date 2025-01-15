import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Chat from "../../util/Chat/index.tsx";
import { FormExtension } from "../extensions/MyExtension.tsx";
import {
  ChatWrapper,
  VF_ICON,
  SystemResponseTemplate,
} from "../../util/Chat/ChatStoryHelpers.tsx";
import { forms } from "../extensions/formDataGenerator";
import FormComponent from "../extensions/FormComponent";

const meta: Meta<typeof Chat> = {
  title: "Extensions/MyExtension",
  component: Chat,
  decorators: [
    (Story) => (
      <ChatWrapper>
        <Story />
      </ChatWrapper>
    ),
  ],
  args: {
    isLoading: false,
    actions: [],
    title: "Form Extensions",
    withWatermark: true,
    image: VF_ICON,
    description: "Beautiful form extensions for your chat",
    startTime: Date.now(),
    hasEnded: false,
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

const createStory = (payload: any): Story => ({
  render: (args) => (
    <Chat {...args}>
      <SystemResponseTemplate
        messages={[
          {
            type: "EXTENSION",
            payload: {
              extension: FormExtension,
              trace: {
                id: "123",
                type: "ext_react_form",
                payload: payload,
              },
            },
          },
        ]}
      />
    </Chat>
  ),
});

export const ContactForm = createStory(forms.contactForm);
export const FeedbackForm = createStory(forms.feedbackForm);
export const SubscriptionForm = createStory(forms.subscriptionForm);
