import type { Preview } from "@storybook/react";
import "regenerator-runtime/runtime"; // inscrutable regenerator runtime erro 🙃

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
