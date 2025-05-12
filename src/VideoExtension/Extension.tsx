import { z } from "zod/v4";
import { extension_config } from "./config";
import { createExtension } from "../../util/extensions/index";

const inputs = z.object({
  url: z.string(),
  title: z.string().optional(),
  autoplay: z.boolean().optional(),
  loop: z.boolean().optional(),
  muted: z.boolean().optional(),
  controls: z.boolean().optional(),
  poster: z.string().optional(),
  startAt: z.string().optional(),
});

export type ExtensionPayload = z.infer<typeof inputs>;

export const VideoExtension = createExtension({
  id: extension_config.id,
  name: extension_config.reference_name,
  llmDescription: extension_config.description,
  inputs,
  render: ({ inputs, element }) => {
    const { url, autoplay, controls, muted, loop, title, poster, startAt } =
      inputs;

    // Helper to check if URL is YouTube
    const isYouTubeUrl = (url: string): boolean => {
      return (
        url?.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/) !== null
      );
    };

    // Helper to get YouTube video ID
    const getYouTubeId = (url: string): string => {
      const regExp =
        /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      return match?.[1] ?? "";
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
      const startTimeSeconds = parseTimestamp(startAt || "");
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
});
