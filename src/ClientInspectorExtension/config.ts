import type { ExtensionConfig } from "../../util/types/extension";
import { z } from "zod";
export const extension_config: ExtensionConfig = {
  id: "ext_client_inspector",
  reference_name: "ClientInspectorExtension",
  supports_dark_mode: false,
  description:
    "Collects client-side information and sends it back to Voiceflow",
};

// ========================================================
// 🚀 Exports (You probably don't need to modify these)
// ========================================================
// Schemas (with Voiceflow compatibility fixes)


export type ClientInfo = {
  userAgent: string;
  language: string;
  timezone: string;
  localTime: string;
  screenResolution: {
    width: number;
    height: number;
  };
  isMobile: boolean;
  isTouchDevice: boolean;
  browser: {
    name: string;
    version: string;
  };
  os: {
    name: string;
    version: string;
  };
  isDarkMode: boolean;
};
