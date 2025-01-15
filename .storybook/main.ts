import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // viteFinal: (config) => {
  //   return config;
  // },
};
export default config;
