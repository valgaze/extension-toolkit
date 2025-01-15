import React from "react";
import { SystemResponse, UserResponse } from "@voiceflow/react-chat";
import type { SystemResponseProps } from "@voiceflow/react-chat/build/src/components/SystemResponse";
import type { UserResponseProps } from "@voiceflow/react-chat/build/src/components/UserResponse";
import {
  RuntimeStateAPIContext,
  RuntimeStateContext,
  RenderMode,
} from "@voiceflow/react-chat";

export const VF_ICON = "https://speedybot.js.org/sb_logo.svg";

export const ChatWrapper = ({ children }) => {
  const contextValue = {
    config: {
      render: { mode: RenderMode.OVERLAY },
      speechRecognition: false,
    },
    toggleAudioOutput: () => {},
  };

  const stateValue = {
    audioOutput: false,
    indicator: false,
    session: { turns: [] },
  };

  return (
    <RuntimeStateAPIContext.Provider value={contextValue}>
      <RuntimeStateContext.Provider value={stateValue}>
        {children}
      </RuntimeStateContext.Provider>
    </RuntimeStateAPIContext.Provider>
  );
};

export const SystemResponseTemplate = ({
  messages,
  ...args
}: Partial<SystemResponseProps>) => (
  <SystemResponse
    {...args}
    messages={messages as any}
    avatar={VF_ICON}
    timestamp={Date.now()}
  />
);

export const UserResponseTemplate = ({
  message,
  ...args
}: Partial<UserResponseProps>) => (
  <UserResponse
    timestamp={Date.now()}
    message={message || "Lorem ipsum dolor"}
    {...args}
  />
);
