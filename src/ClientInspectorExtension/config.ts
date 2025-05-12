import type { ExtensionConfig } from "../../util/types/extension";
export const extension_config: ExtensionConfig = {
  id: "ext_client_inspector",
  reference_name: "ClientInspectorExtension",
  supports_dark_mode: false,
  description: `## Client Inspector Extension:
<use_case>
    Use this tool to collect and analyze client-side information including browser details, 
    device information, and system capabilities.
</use_case>
<important_notes>
    1. Automatically collects browser name and version
    2. Information is sent back to the conversation flow
    3. Can be used for debugging or customizing user experience
    4. No user interaction required - runs automatically
</important_notes>`,
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
