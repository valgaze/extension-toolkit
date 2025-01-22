import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormExtension } from "../extensions/MyExtension.tsx";
import { extension_config } from "../extensions/config";
import type { ExtensionPayload } from "../extensions/config";
import Chat from "../../util/Chat/index.tsx";
import {
  ChatWrapper,
  CHAT_ICON,
  UserResponseTemplate,
  SystemResponseTemplate,
} from "../../util/Chat/ChatStoryHelpers.tsx";
import { forms } from "./story_data.ts";

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
    title: "Extension Development Kit",
    image: CHAT_ICON,
    description:
      "Build extensions for your Voiceflow chat widget the speedy + easy way",
    startTime: Date.now(),
    hasEnded: false,
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

const createStory = (tracePayload: ExtensionPayload): Story => ({
  render: (args) => {
    interface Interaction {
      timestamp: number;
      action: string;
      data: any;
    }

    const [interactions, setInteractions] = useState<Interaction[]>([]);

    useEffect(() => {
      window.voiceflow = {
        chat: {
          interact: (data: any) => {
            setInteractions((prev) => [
              ...prev,
              {
                timestamp: Date.now(),
                action: data.action || "unknown",
                data,
              },
            ]);
          },
        },
      };
    }, []);

    return (
      <>
        <Chat {...args}>
          <UserResponseTemplate
            message={`Hey show the extension-- it's ${new Date().toLocaleTimeString()}`}
          />
          <SystemResponseTemplate
            messages={[
              {
                type: "EXTENSION",
                payload: {
                  extension: FormExtension,
                  trace: {
                    id: "123",
                    type: extension_config.id,
                    payload: tracePayload,
                  },
                },
              },
            ]}
          />
          {interactions.map((interaction, index) => (
            <SystemResponseTemplate
              key={index}
              messages={[
                {
                  type: "text",
                  text: `Form Submission ${index + 1}:\n${JSON.stringify(
                    interaction.data,
                    null,
                    2
                  )}`,
                },
              ]}
            />
          ))}
        </Chat>
      </>
    );
  },
});

export const ContactForm = createStory(forms.contactForm);
export const FeedbackForm = createStory(forms.feedbackForm);
export const SubscriptionForm = createStory(forms.subscriptionForm);
