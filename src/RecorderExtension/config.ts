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
  description:
    "A screen recording extension for capturing and submitting video feedback",
};

