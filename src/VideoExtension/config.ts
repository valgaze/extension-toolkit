import type { ExtensionConfig } from "../../util/types/extension";

export const extension_config: ExtensionConfig = {
  id: "ext_video",
  reference_name: "video",
  description: "Renders a video player for various video sources",
};

export type ExtensionPayload = {
  url: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  startAt?: string;
};
