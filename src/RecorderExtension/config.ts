/*
 * 🔧 RECORDER EXTENSION CONFIG 🔧
 * ============================
 *
 * Configuration and types for the screen recording extension
 */

import type { ExtensionConfig } from "../../util/types/extension";

export const extension_config: ExtensionConfig = {
  id: "ext_recorder",
  reference_name: "RecorderExtension",
  supports_dark_mode: true,
  description: `## Screen Recorder Extension:
<use_case>
    Use this tool to capture screen recordings and audio from users. Perfect for collecting 
    video feedback, tutorials, or bug reports.
</use_case>
<important_notes>
    1. Users must grant permission for screen recording and audio capture
    2. The recording will be automatically submitted when the user clicks the submit button
    3. Users can preview their recording before submitting
    4. Supports both light and dark themes
</important_notes>`,
};
