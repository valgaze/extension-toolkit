import React, { memo, useContext, useMemo, useRef, useState } from "react";

// import type { AssistantInfoProps } from "@/components/AssistantInfo";

import type { AssistantInfoProps } from "@voiceflow/react-chat/build/src/components/AssistantInfo/index";
import { AssistantInfo } from "@voiceflow/react-chat";
import type { FooterProps } from "@voiceflow/react-chat/build/src/components/Footer";
import { Footer } from "@voiceflow/react-chat";
import type {
  HeaderActionProps,
  HeaderProps,
} from "@voiceflow/react-chat/build/src/components/Header";
import { Header } from "@voiceflow/react-chat";
import { Loader } from "@voiceflow/react-chat";
import { Prompt } from "@voiceflow/react-chat";
import {
  AutoScrollProvider,
  RuntimeStateAPIContext,
  RuntimeStateContext,
} from "@voiceflow/react-chat";
import { RenderMode } from "@voiceflow/react-chat";
// import type { Nullish } from "@voiceflow/react-chat/build/src/types";
export type Nullish<T> = T | null | undefined;

// import { chain } from "@voiceflow/react-chat/build/src/utils/functional";
const chain =
  <Args extends any[]>(...fns: Array<((...args: Args) => void) | undefined>) =>
  (...args: Args) =>
    fns.forEach((fn) => fn?.(...args));

import { useTimestamp } from "./hooks";
import {
  Container,
  Dialog,
  Overlay,
  SessionTime,
  Spacer,
  Status,
} from "./styled";

export interface ChatProps
  extends HeaderProps,
    AssistantInfoProps,
    FooterProps,
    React.PropsWithChildren<unknown> {
  /**
   * A short description of the assistant to help frame the conversation.
   */
  description: string;

  /**
   * If true, shows a loading indicator.
   */
  isLoading: boolean;

  /**
   * If true, shows audio interface controls.
   */
  audioInterface?: boolean;

  /**
   * A unix timestamp indicating the start of the conversation.
   */
  startTime?: Nullish<number>;

  /**
   * If true, a Voiceflow watermark is added to the footer.
   */
  withWatermark: boolean;

  /**
   * A callback that is executed when the chat widget is minimized.
   */
  onMinimize?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * A callback that is executed when the conversation ends.
   */
  onEnd?: React.MouseEventHandler<HTMLButtonElement>;
}

const Chat: React.FC<ChatProps> = ({
  hasEnded = false,
  title,
  image,
  avatar,
  description,
  startTime,
  isLoading,
  withWatermark,
  onMinimize,
  onEnd,
  onStart,
  onSend,
  children,
  audioInterface,
}) => {
  const timestamp = useTimestamp(startTime);
  const dialogRef = useRef<HTMLElement>(null);
  const [hasAlert, setAlert] = useState(false);

  const { config, toggleAudioOutput } = useContext(RuntimeStateAPIContext);
  const state = useContext(RuntimeStateContext);

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (hasEnded) {
      onEnd?.(event);
    } else {
      setAlert(true);
    }
  };

  const handleResume = (): void => setAlert(false);

  const actions = useMemo<HeaderActionProps[]>(() => {
    const items: HeaderActionProps[] = [{ svg: "close", onClick: handleClose }];

    if (config.render?.mode === RenderMode.OVERLAY) {
      items.unshift({ svg: "minus", onClick: onMinimize });
    }

    if (audioInterface) {
      items.unshift({
        svg: state.audioOutput ? "sound" : "soundOff",
        onClick: toggleAudioOutput,
      });
    }

    return items;
  }, [
    config.render,
    handleClose,
    onMinimize,
    state.audioOutput,
    audioInterface,
  ]);

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container withPrompt={hasAlert}>
      <Header title={title} image={image} actions={actions} />
      <Dialog ref={dialogRef}>
        <AutoScrollProvider target={dialogRef}>
          <AssistantInfo
            title={title}
            avatar={avatar}
            description={description}
          />
          <Spacer />
          {!!timestamp && !!state.session.turns.length && (
            <SessionTime>{timestamp}</SessionTime>
          )}
          {children}
          {hasEnded && !!state.session.turns.length && (
            <Status>The chat has ended</Status>
          )}
        </AutoScrollProvider>
      </Dialog>
      <Footer
        withWatermark={withWatermark}
        hasEnded={hasEnded}
        onStart={onStart}
        onSend={onSend}
        disableSend={state.indicator}
        audioInterface={audioInterface}
        speechRecognition={config.speechRecognition}
      />
      <Overlay />
      <Prompt
        accept={{
          label: "End Chat",
          type: "warn",
          onClick: chain(onEnd, handleResume),
        }}
        cancel={{ label: "Cancel", onClick: handleResume }}
      />
    </Container>
  );
};

/**
 * A full chat dialog with header, footer, overlay and auto-scrolling content.
 *
 * @see {@link https://voiceflow.github.io/react-chat/?path=/story/templates-chat--empty}
 */
export default Object.assign(memo(Chat), {
  Container,
  Dialog,
  Overlay,
  Spacer,
  Status,
});
