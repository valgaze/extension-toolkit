/*
 * 🎯 FORM EXTENSION EXPORT 🎯
 * ==========================
 *
 * ⚠️ REQUIREMENTS: Export must include:
 * {
 *   name: string            - Unique identifier from config
 *   type: "response"        - Renders form in response to trace
 *   match: (props) => bool  - Matches trace type/payload name
 *   render: (props) => void - Renders form in shadow DOM
 * }
 */

import type { ExtensionConfig } from "../util/types/extension";
import type { RenderExtension } from "../util/types/extension";
export const extension_config: ExtensionConfig = {
  id: "beer",
  reference_name: "videoguy",
  description: "Refnders a video frame ",
};
type ExtensionPayload = {
  url: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
};
export const VideoExtension: RenderExtension<ExtensionPayload> = {
  name: extension_config.reference_name,
  type: "response",
  match: ({ trace }) =>
    trace.type === extension_config.id ||
    trace.payload?.name === extension_config.id,
  render: ({ element, trace }) => {
    const { url, autoplay, controls, muted, loop, title } = trace.payload || {};

    // Helper to check if URL is YouTube
    const isYouTubeUrl = (url: string): boolean => {
      return (
        url?.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/) !== null
      );
    };

    // Helper to snatch YouTube video ID
    const getYouTubeId = (url: string): string => {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url?.match(regExp);
      return match?.[2] ?? "";
    };

    if (isYouTubeUrl(url)) {
      // Create YouTube embed
      const container = document.createElement("div");
      container.style.cssText =
        "position: relative; width: 100%; padding-bottom: 56.25%;";

      const iframe = document.createElement("iframe");
      const videoId = getYouTubeId(url);

      const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: muted ? "1" : "0",
        controls: controls !== false ? "1" : "0",
        loop: loop ? "1" : "0",
      });

      iframe.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      iframe.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
      `;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      if (title) iframe.title = title;

      container.appendChild(iframe);
      element.appendChild(container);
    } else {
      // Create regular video element
      const video = document.createElement("video");
      video.src = url;
      video.style.maxWidth = "100%";

      if (autoplay) video.setAttribute("autoplay", "");
      if (controls) video.setAttribute("controls", "");
      if (muted) video.setAttribute("muted", "");
      if (loop) video.setAttribute("loop", "");
      if (title) video.setAttribute("title", title);

      // Add completion event listener
      video.addEventListener("ended", () => {
        window.voiceflow.chat.interact({ type: "complete" });
      });

      element.appendChild(video);
    }

    // Return cleanup function
    return () => {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    };
  },
};
