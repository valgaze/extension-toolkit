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

### Option 4 (rare)

If you want to build a lite version of the extension which DOES NOT bundle React/React-DOM (ie the case where you're outputting multiple extensions that use React into multiple files for some reason and you dont want to bundle React/React-DOM in each of them) you can use the following command:

```sh
npm run build:extension:lite
```

This outputs the extension to `dist/`. You can then import it into your project as needed.
