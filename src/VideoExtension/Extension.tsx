import type { RenderExtension } from "../../util/types/extension";
import { extension_config } from "./config";
import type { ExtensionPayload } from "./config";

// Using "vanilla" JS to render the video
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

    // Helper to get YouTube video ID
    const getYouTubeId = (url: string): string => {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url?.match(regExp);
      return match?.[2] ?? "";
    };

    // Helper to parse timestamp string to seconds
    const parseTimestamp = (timestamp: string): number => {
      if (!timestamp) return 0;

      const regex = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/;
      const matches = timestamp.match(regex);

      if (!matches) return 0;

      const [_, hours, minutes, seconds] = matches;
      return (
        parseInt(hours || "0") * 3600 +
        parseInt(minutes || "0") * 60 +
        parseInt(seconds || "0")
      );
    };

    if (isYouTubeUrl(url)) {
      // Create YouTube embed
      const container = document.createElement("div");
      container.style.cssText = "position: relative; width: 100%;";

      const iframe = document.createElement("iframe");
      const videoId = getYouTubeId(url);

      const startTimeSeconds = parseTimestamp(trace.payload?.startAt || "");

      const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: muted ? "1" : "0",
        controls: controls !== false ? "1" : "0",
        loop: loop ? "1" : "0",
        start: startTimeSeconds.toString(), // Add start time parameter
      });

      iframe.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      iframe.style.cssText = `
        border: none;
      `;
      iframe.allow =
        "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      if (title) {
        iframe.title = title;
        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        titleElement.style.cssText = `
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          font-family: sans-serif;
        `;
        container.appendChild(titleElement);
      }

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
        window.voiceflow.chat.interact({
          type: "complete",
          payload: {},
        });
      });

      // Update video styling
      video.style.cssText = `
        max-width: 100%;
        width: 100%;
        aspect-ratio: 16/9;
        display: block;
      `;

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
