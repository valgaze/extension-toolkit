import { createExtension } from "../../util/extensions/index";
import { extension_config } from "./config";
import { z } from "zod/v4";
import type { ClientInfo } from "./config";

const getBrowserInfo = (): { name: string; version: string } => {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  let browserVersion = "Unknown";

  if (userAgent.includes("Firefox")) {
    browserName = "Firefox";
    browserVersion = userAgent.match(/Firefox\/([0-9.]+)/)?.[1] || "Unknown";
  } else if (userAgent.includes("Chrome")) {
    browserName = "Chrome";
    browserVersion = userAgent.match(/Chrome\/([0-9.]+)/)?.[1] || "Unknown";
  } else if (userAgent.includes("Safari")) {
    browserName = "Safari";
    browserVersion = userAgent.match(/Version\/([0-9.]+)/)?.[1] || "Unknown";
  } else if (userAgent.includes("Edge")) {
    browserName = "Edge";
    browserVersion = userAgent.match(/Edge\/([0-9.]+)/)?.[1] || "Unknown";
  }

  return { name: browserName, version: browserVersion };
};

const getOSInfo = (): { name: string; version: string } => {
  const userAgent = navigator.userAgent;
  let osName = "Unknown";
  let osVersion = "Unknown";

  if (userAgent.includes("Windows")) {
    osName = "Windows";
    osVersion = userAgent.match(/Windows NT ([0-9.]+)/)?.[1] || "Unknown";
  } else if (userAgent.includes("Mac")) {
    osName = "macOS";
    osVersion = userAgent.match(/Mac OS X ([0-9._]+)/)?.[1] || "Unknown";
  } else if (userAgent.includes("Linux")) {
    osName = "Linux";
  } else if (userAgent.includes("Android")) {
    osName = "Android";
    osVersion = userAgent.match(/Android ([0-9.]+)/)?.[1] || "Unknown";
  } else if (userAgent.includes("iOS")) {
    osName = "iOS";
    osVersion = userAgent.match(/OS ([0-9._]+)/)?.[1] || "Unknown";
  }

  return { name: osName, version: osVersion };
};

const collectClientInfo = (): ClientInfo => {
  const now = new Date();

  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    localTime: now.toISOString(),
    screenResolution: {
      width: window.screen.width,
      height: window.screen.height,
    },
    isMobile:
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    isTouchDevice: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    browser: getBrowserInfo(),
    os: getOSInfo(),
    isDarkMode:
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  };
};

// Inputs for the extension
const clientInfoSchema = z.object({
  message: z.string().default("Client info collected and sent to agent"),
});

export const ClientInspectorExtension = createExtension({
  name: extension_config.reference_name,
  id: extension_config.id,
  llmDescription: extension_config.description,
  inputs: clientInfoSchema,
  render: ({ bridge, element, inputs }) => {
    // Step 1: collect data
    const clientInfo = collectClientInfo();
    // Step 2: dispatch back to conversation diagram
    bridge.complete({ clientInfo });
    // Step 3: Show the user what happened
    // Note: this could alternatively be an effects extension w/ stop-on-action enabled if you did not want to render anything
    // See src/ToastExtension/Extension.tsx for an example
    element.innerHTML = `<div style="font-family:sans-serif;font-size:14px;padding:1rem;">${inputs.message}</div>`;
    return () => {
      element.innerHTML = "";
    };
  },
});
