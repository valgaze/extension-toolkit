import type { ExtensionConfig } from "../../util/types/extension";

export const extension_config: ExtensionConfig = {
  id: "ext_video",
  reference_name: "video",
  description: `## Video Player Extension:
<use_case>
    Use this tool to embed and play videos from various sources including YouTube and direct video URLs.
    Supports features like autoplay, controls, looping, and custom start times.
</use_case>
<important_notes>
    1. For YouTube videos, the URL must be a valid YouTube URL
    2. For direct video URLs, ensure the video format is supported by the browser
    3. When using startAt, use format like "1m30s" for 1 minute and 30 seconds
</important_notes>`,
};
