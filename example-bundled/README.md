# Bundled Example

This directory contains a minimal example showing how to import a Voiceflow extension into a basic HTML file. The extension is built using Vite's [library mode](https://vite.dev/guide/build.html#library-mode).

## Quick Start

Generate and test the bundled example:

```sh
npm run serve:example
```

This builds the extension and serves a non-minified HTML file that imports it. It uses a basic HTTP server (no live-reload) to verify the extension works in a simple HTML setup.

## Development Options

### Option 1: Isolated Development

Start with a controlled environment:

```sh
npm run storybook
```

- Isolated development environment with mock data
- Modern dev tools (hot reloading, etc.)
- Examine all possible conversation traces
- Available at http://localhost:6006/index.html

### Option 2: Development with Live Chat Widget

Once tested in Storybook, try it with your actual Voiceflow project:

```sh
npm run dev
```

- Tests the extension in the real Voiceflow chat widget
- Connects to your project's conversation design
- Available at http://localhost:5173/index.html
- Includes live-reload

### Option 3: Production Build

When you're ready to deploy:

```sh
npm run build:extension
```

This outputs the extension to `dist/`. You can then import it into your project as needed.

### Option 4: CDN-Ready Build

If you want to build serve your extension(s) via a CDN (Content Delivery Network):

```sh
npm run build:extension:cdn
```

This creates a CDN-optimized build that:

- Bundles the extension as a global variable (`window.VoiceflowExtensions`)
- Makes it easy to include via a `<script>` tag
- Perfect for when you want to load the extension directly in the browser from a generated `/bundled_cdn.js`

To test the CDN build:

```sh
npm run serve:example:cdn
```

This command builds and serves the extension in a way that simulates CDN delivery. It's useful for:

- Testing how your extension works when loaded as a global script
- Verifying browser compatibility
- Ensuring proper loading in a CDN-like environment

## About CDN Builds

A CDN (Content Delivery Network) build is useful when you want to:

- Load your extension directly in the browser without a build step
- Share your extension with others who might not use npm/bundlers
- Improve load times by serving the extension from a fast, distributed network
- Support legacy systems or simple HTML/JavaScript projects

Example usage of a CDN build:

```html
<!-- Load the extension(s) from your CDN -->
<script src="https://your-cdn.com/voiceflow-extension.js"></script>

<script type="module">
  // Import the extension(s) off window.VoiceflowExtensions
  const { FormExtension, VideoExtension } = window.VoiceflowExtensions;

  // Initialize Voiceflow Chat Widget
  // See documentation for deets: https://docs.voiceflow.com/docs/embed-customize-styling#customization-and-configuration
  (function (d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "project_id_here" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production", // If 'production' you must click  PUBLISH on canvas to get updates, if development you need to press the Run button
        assistant: {
          extensions: [FormExtension, VideoExtension],
        },
      });
    };
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
  })(document, "script");
</script>
```
