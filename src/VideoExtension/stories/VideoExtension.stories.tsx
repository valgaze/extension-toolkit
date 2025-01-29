import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createExtensionStory } from "../../../util/storybook/index.tsx";

// Extension and config
import { VideoExtension } from "../Extension.tsx";
import { extension_config } from "../config.ts";
import type { ExtensionPayload } from "../config.ts";

const meta = {
  title: "Extensions/Video",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HTMLDivElement>;

export default meta;
type Story = StoryObj<typeof HTMLDivElement>;

const options = {
  containerStyles: {
    width: "640px",
  },
};

// Sample video payloads for stories
const videos = {
  youtubeDemo: {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
    autoplay: true,
    controls: true,
    muted: true,
  },
  biscotti: {
    url: "https://www.youtube.com/watch?v=6A8W77m-ZTw",
    title: "Biscotti",
    autoplay: true,
    controls: true,
    muted: false,
    startAt: "1m56s",
  },
  parcels: {
    url: "https://www.youtube.com/watch?v=_2qsU8FGU_E",
    autoplay: true,
    muted: true,
  },
  kosmo: {
    url: "https://www.youtube.com/watch?v=YKIjXoiubzc",
    title: "Jessica Triangle by Johnny Kosmo",
    controls: false,
    muted: false,
  },
  localVideo: {
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    title: "Big Buck Bunny Sample",
    autoplay: false,
    controls: true,
    muted: false,
  },
} satisfies Record<string, ExtensionPayload>;

// Stories
export const YoutubeAutoplayWithControls =
  createExtensionStory<ExtensionPayload>(
    VideoExtension,
    extension_config,
    videos.youtubeDemo,
    options
  );

export const YoutubeAutoplayNoTitle = createExtensionStory<ExtensionPayload>(
  VideoExtension,
  extension_config,
  videos.parcels,
  options
);

export const YoutubeNoControls = createExtensionStory<ExtensionPayload>(
  VideoExtension,
  extension_config,
  videos.kosmo,
  options
);

export const YoutubeWithStartTime = createExtensionStory<ExtensionPayload>(
  VideoExtension,
  extension_config,
  videos.biscotti,
  options
);

export const NonYoutubeVideoEmbed = createExtensionStory<ExtensionPayload>(
  VideoExtension,
  extension_config,
  videos.localVideo,
  options
);
