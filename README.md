# Voiceflow Extension Development Kit

Build powerful, type-safe extensions for Voiceflow chat widgets using your favorite framework (React, Vue, Svelte, vanilla JS, etc) and have fun while doing it

[![Get Started](https://img.shields.io/badge/🚀_Get_Started-Guide-7B68EE?style=for-the-badge&logoColor=white)](#setup)

## Why Use This Kit

- 🔥 **Rapid Development**: Hot reloading and real-time testing in Storybook + V1 Voiceflow widget
- 🔒 **Type Safety**: Catch errors before runtime with TypeScript integration
- 🧪 **Easy Testing**: Test your extensions in isolation or with live Voiceflow widget
- 🛠️ **Developer Tools**: Built-in debugging and development utilities
- 🔐 **Security First**: Controlled dependency management and secure builds
- 🌟 **Conversation Design**: Build natural, intuitive experiences by collaborating with conversation designers to create extensions that seamlessly integrate into chat flows

## Why This Kit Exists

While you can get quite far with vanilla JavaScript when building Voiceflow chat widgets, as your extensions grow more complex, you'll likely encounter several challenges:

- **Canvas-Code Disconnect**: There's often a broken linkage between what's configured in the Voiceflow canvas and your implementation code (extension id's, what payloads are sent/returned, etc)
- **Development Environment**: Testing changes requires constant redeployment to see results in the actual widget-- also nice to focus and build extensions isolation focusing on crafting the best experience
- **Source Control**: Managing versions and collaborating becomes difficult without proper source control
- **Security Concerns**: Using external libraries via CDNs can pose security risks in production environments
- **Type Safety**: Lack of type checking can lead to runtime errors

This toolkit addresses these challenges by providing a structured development environment with buttery-smooth tooling.

## Setup

If you've never written code before untick the "I'm New to Coding" box below, otherwise get started on step 1 below

<details>
<summary>🐣 "I'm New to Coding"</summary>

## 0) Get the tools you'll need

You'll need three tools to get started building Voiceflow extensions on your machine:

- **Node.js**
- **Git**
- **A code editor**

Entering the commands below will require you to have a terminal open. If you're not sure how to open a terminal or where to start, see this guide for the basics: https://support.apple.com/guide/terminal/welcome/mac

### Setup Node on Your Computer

Node is a popular tool for running Typescript/JavaScript on web servers. Today, you'll use it to build your Voiceflow extension

You'll need to install NodeJS on your machine to run your extension in a Voiceflow widget. There are many ways to do that, but two easy ways:

**Option 1** Download + install Node from the official site: **[https://nodejs.org/en/download](https://nodejs.org/en/download)**

or

**Option 2** Download with **[Volta](https://docs.volta.sh/guide/)** in the terminal

```sh
curl https://get.volta.sh | bash

volta install node
```

Once you can run `node --version` in your terminal, you're good to go!

## Setup Git on Your Computer

Git is a tool for managing code. It's a way to keep track of changes you make to your code and collaborate with others.

The easiest way to install Git is to download it from the official site: **[https://git-scm.com/downloads](https://git-scm.com/downloads)** or to follow this guide: https://www.atlassian.com/git/tutorials/install-git

If you're looking for a graphical interface for git, you can download **[GitHub Desktop](https://github.com/apps/desktop)**

Long story short, if you can run `git --version` in your terminal, you're good to go!

You'll also need a code editor. You can use whatever you want, but two good choices are **[VSCode](https://code.visualstudio.com/)** or **[Cursor](https://www.cursor.com/)**

</details>

## 1) Fetch repo & install deps

If you're comfortable with Git, run:

```
git clone https://github.com/valgaze/extension-toolkit
cd extension-toolkit
npm install
```

Or follow the "I'm New to Coding" instructions above ☝️

This might take a few minutes to complete, so while you're waiting, let's get your Voiceflow project ready

## 2) Create an agent in Voiceflow

- If you don't have a Voiceflow account, create one here: **[https://creator.voiceflow.com/signup
  ](https://creator.voiceflow.com/signup)** and login

- From your Voiceflow dashboard, find the import button in the top right corner and import the **[project file (assets/voiceflow_project_file.vf)](./assets/voiceflow_project_file.vf)** to get up and running quickly or make your own from scratch

- The import flow will look roughly like this:

![Voiceflow Import](./assets/import.gif)

## 3) Open and "Run" your Voiceflow project

- Once you've imported the project file, open the project + select Workflows and then tap the "Edit Workflow" button

![Voiceflow Workflow](./assets/workflow.png)

- 🛠️ Note: Everytime you make a change to your voiceflow diagram when developing your extension, you'll need to tap the "Chat" button to push any changes in the Voiceflow widget and your extensions. Press it once to run the project and publish the 1st development version that we'll use in the next few steps. (When you're ready to lock it in, you can tap "Publish" to publish a production version of your agent)

![Voiceflow Run](./assets/chat.png)

## 4) Grab your project ID

- On your way out of Voiceflow, tap the Voiceflow settings button from the sidebar and copy the project ID under the metadata section-- you'll need this in the next step

![Voiceflow Project ID](./assets/project_id.png)

## 4a) Turn off "private" mode for your agent

- Since we'll be using the widget to interact with your extensions, scroll down the bottom of **General** and tick the toggle for private mode to OFF

![Private mode](./assets/private_mode.gif)

## 5) Save your project ID to a .env file

- Back in your terminal, run the following command to create a `.env` file in the root of the repo and save your project ID to it

```sh
npm run setup
```

![Setup](./assets/add_project_id.gif)

<details>
<summary>🛠️ Note: If you're comfortable with the command line, you can also create the .env file manually, tap here to see how</summary>

```sh
echo "VITE_VOICEFLOW_PROJECT_ID=your_voiceflow_project_id_here" > .env
```

</details>

## 6) Take it for a spin in Storybook

- Run the following command to start Storybook

```sh
npm run storybook
```

- This will start **[Storybook](https://storybook.js.org/)** and open a new browser window at `http://localhost:6006`

- Storybook lets you build and test your extensions in a sandbox environment. You can create different scenarios ("stories") to validate your extension's behavior, collaborate with team members, and ensure everything works perfectly before integrating with the chat widget

- It's like a playground where you can experiment and fine-tune your extension without worrying (yet!) about the details of a large conversation system

![Storybook](./assets/storybook.gif)

## 7) Test with Live Widget

- Run the following command to start the live chat widget

```sh
npm run dev
```

- This will start the live widget and open a new browser window at `http://localhost:5173?autoload=true`

- The live widget is where you'll test your extension in the actual Voiceflow chat widget in conversation flows, make changes to the code and see the changes instantly.

- You can also test different scenarios and see if your extension submits data to the Voiceflow canvas as you expect.

- **Note:** If you're using the live widget, you'll need to click "Run" in the Voiceflow canvas to see the changes in the live widget

![Live Widget](./assets/live_widget.gif)

## 8) Build your extension

- Run the following command to build your extension

```sh
npm run build:extension
```

- This will bundle your extension and output it to the `dist/` directory where you can import it into your Voiceflow widget

## Extension Development Guide

### Extension Types and Configuration

There are two main types of extensions you can create:

1. **Render Extensions** - Display content within the chat widget
2. **Effect Extensions** - Perform actions outside the chat widget (like showing toasts, updating external UI)

### Bridge API

The `bridge` object provides type-safe methods to communicate between your extension and the Voiceflow canvas:

Example usage:

```typescript
const MyExtension = createExtension({
  // ... other config ...
  outputs: z.object({
    selectedOption: z.string(),
  }),
  render: ({ inputs, bridge }) => {
    const handleSelect = (value: string) => {
      try {
        // Type-safe! TypeScript will error if data doesn't match outputs schema, optionally if $config.schema is set to true you will also get a runtime error
        bridge.complete({ selectedOption: value });
      } catch (err) {
        // Error handling is built-in
        bridge.error(err);
      }
    };

    return <div>...</div>;
  },
});
```

Note: For convenience, there is also "escape valve" `bridge.sendRaw({type: 'path1', payload: {a:1,b:2}})` to send back custom values in extraordinary situations

### Creating Extensions

Use the `createExtension` helper to build your extension:

```typescript
import { createExtension } from "./util/extensions";

const MyExtension = createExtension({
  // Required: Unique identifier used in Voiceflow canvas
  id: "my_extension",

  // Optional: Name shown in LLM-facing descriptions
  name: "My Extension",

  // Required: Description for LLM tooling
  llmDescription: "A custom extension that does X",

  // Required: Zod schema defining what data your extension needs
  inputs: z.object({
    title: z.string().default("Pick an optional below"),
    options: z.array(z.string()),
  }),

  // Optional: Zod schema defining what data your extension returns
  outputs: z.object({
    selectedOption: z.string(),
  }),

  // Required: Your extension component
  render: ({ inputs, bridge }) => {
    const handleSelect = (value) => {
      try {
        bridge.complete({ selectedOption: value });
      } catch (err) {
        bridge.error(err);
      }
    };

    return (
      <div>
        <p>{inputs.title}</p>
        {inputs.options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            style={{ marginRight: "0.5rem" }}
          >
            {option}
          </button>
        ))}
      </div>
    );
  },
});
```

For effect extensions that don't render anything in the chat:

```typescript
import { createEffectExtension } from "./util/extensions";

const ToastExtension = createEffectExtension({
  id: "toast_extension",
  name: "Toast Extension",
  llmDescription: "Shows a toast notification outside the chat",

  inputs: z.object({
    message: z.string(),
  }),

  effect: ({ inputs }) => {
    // Show toast outside chat widget
    showToast(inputs.message);
  },
});
```

### Exporting Extensions

Export your extensions in `src/index.tsx`:

```typescript
import { MyExtension } from "./src/MyExtension";
import { ToastExtension } from "./src/ToastExtension";

export default [MyExtension, ToastExtension];
```

Anything exported in index.tsx will be available in the final bundle generated to dist/

### Configuration

Extensions receive configuration through the `$config` object. This is passed from the Voiceflow diagram and always overrides defaults:

| Property | Type                    | Default    | Description                                         |
| -------- | ----------------------- | ---------- | --------------------------------------------------- |
| `logs`   | boolean                 | true       | Show debug logs in the console                      |
| `schema` | boolean                 | false      | Whether to validate inputs against the schema       |
| `error`  | "console" \| "interact" | "interact" | How to handle errors (console logs or show in chat) |
| `dark`   | boolean                 | false      | Whether to use dark mode styling                    |

Example configuration in Voiceflow diagram:

```javascript
{
  "$config": {
      "logs": true,
      "schema": true,
      "error": "interact",
      "dark": true
  },
  "message": "How did we do?"
}
```

Note: $config lives on it own level, you can provide extension-specific inputs around it

### Building Extensions

#### Standard Build to dist/

```sh
npm run build:extension
```

For a full demonstration, run `npm run serve:example` to see a full integration in the **[example-bundled](./example-bundled/)** directory

#### CDN Build to dist/

```sh
npm run build:extension:cdn
```

For a full demonstration, run `npm run serve:example:cdn` to see a full integration in the **[example-bundled](./example-bundled/)** directory

### Using Zod Mini

For smaller bundle sizes with optimal treeshaking, you can try using [Zod-mini](https://zod.dev/packages/mini) in the extensions themselves:

```typescript
import { z } from "zod/v4-mini";

const MyExtension = createExtension({
  id: "my_extension",
  llmDescription: "My extension",
  // Note slightly different syntax for zod-mini
  inputs: z.object({
    description: z.optional(z.string()),
    index: z.number().check(z.minimum(5), z.maximum(10)),
    specialString: z.optional(
      z.string().check(z.startsWith("special-"), z.maxLength(12))
    ),
  }),
  render: ({ inputs, bridge }) => {
    // Your component logic
  },
});
```

### Extension Lifecycle

1. **Input Validation**

   - Extension receives data from Voiceflow diagram
   - Zod schema validates the input if `schema: true`
   - If validation fails, error handling follows `error` config

2. **Rendering/Effect**

   - For render extensions: Component is mounted in chat
   - For effect extensions: Effect function runs once

3. **Data Collection (Optional)**

   - If `outputs` schema is defined, extension can collect data
   - Call `bridge.complete(data)` to send data back to Voiceflow
   - Set "Stop on Action" in Voiceflow diagram to wait for data

4. **Cleanup**
   - Render extensions: Component is unmounted when done
   - Effect extensions: No cleanup needed

## Development Workflow

### Available Scripts

| Command                       | Description                                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run storybook`           | Start Storybook development environment w/ HMR (port 6006)                                                                             |
| `npm run dev`                 | Run extension in live Voiceflow widget with live-reload (port 5173)                                                                    |
| `npm run dev:mobile`          | Run extension in live Voiceflow widget with network IP address exposed so a phone on same network can connect, live-reload (port 5173) |
| `npm run build:extension`     | Build production-ready extension bundle                                                                                                |
| `npm run build:extension:cdn` | Build production-ready CDN-compatible extension bundle                                                                                 |
| `npm run serve:example`       | Build and serve example with bundled extension, output in `example-bundled` directory                                                  |
| `npm run serve:example:cdn`   | Build and serve example with CDN-compatible bundled extension, output in `example-bundled` directory                                   |

### Development Process

1. **Start in Storybook** (`npm run storybook`)

   - Develop components in isolation, write "stories" specifying the data from the Voiceflow canvas
   - Test all conversation paths
   - Hot Module Replacement (HMR) enabled, instant updates a soon as you make a change
   - Available at `http://localhost:6006`

2. **Test with Live Widget** (`npm run dev`)

   - Upload the **[Voiceflow Project File](./assets/voiceflow_project_file.vf)** to your Voiceflow project and press "Run" to publish to the development environment
   - Test in real Voiceflow chat widget
   - Available at `http://localhost:5173?autoload=true`

3. **Production Build** (`npm run build:extension`)
   - Bundle your extension for production
   - Output to `dist/` directory
   - Ready for inclusion into a voiceflow widge

The sample project takes care of all the setup for you, but if you want to know how it works on the canvas when building a extension that transmits data back to the canvas (ie forms, configurators, date/time/appointment pickers, etc) here's a quick guide

## Step I: Create a custom action node in Voiceflow

Extensions in this toolkit use a **[config.ts](./src/extensions/config.ts)** that defines

1. Basic Extension Info:

   - `id`: Unique identifier for your extension (used in Voiceflow canvas)
   - `name`: Display name of your extension
   - `supports_dark_mode`: flag if the extension supports dark mode in browsers

2. Extension Payload:
   - This is a specification of the data that the extension needs from Voiceflow (ex. what payloads are sent/returned, etc)

Below is an example of a custom action node in Voiceflow that uses the extension id `ext_react_form`-- you can call this whatever you want but make sure you put the same id in the config.ts file

![Voiceflow Custom Action](./assets/create_action.gif)

**Stop on Action:** This toggle determines if your conversation should wait for user input before continuing. Here's when to use it:

- For extensions that collect user data (like forms, seat pickers, or surveys), enable "Stop on Action" and use `bridge.complete()` to send the data back to Voiceflow
- For extensions that just display content (like videos, images, or toasts) without needing user input, leave "Stop on Action" disabled

Add the extension to **[index.tsx](./src/index.tsx)**

## Step II: Create a "Javascript step" in Voiceflow

Once your extension completes and transmits data back to the canvas, you'll need to create a javascript step to handle the data and pluck it out

![Voiceflow Javascript Step](./assets/javascript_step_extract.png)

## Step III: Use the values in Voiceflow

You can now access the values you extracted in the javascript step in your voiceflow project

![Voiceflow Javascript Step](./assets/use_variables.png)

**Note:** You'll need to tap each variable in curly braces to make it a "variable" accessible anywherein the canvas

From there you can make any extension you want-- most extensions are "response" extensions that send a message back to the canvas but you can also build "effect" extensions that don't send data back to the canvas and do something in the webpage holding your Voiceflow widget (like update a progress bar, show a loading indicator, etc)

Armed with this toolkit, you're ready to create powerful, production-ready Voiceflow extensions. Whether you're building complex form handlers, interactive visualizations, or custom UI components, you now have the foundation for reliable, type-safe development. Extensions are powerful and FUN!

## Resources

- [Voiceflow Extension Docs](https://docs.voiceflow.com/docs/custom-web-chat-widgets)
- [Voiceflow Extensions Starter Repo](https://github.com/voiceflow-gallagan/vf-extensions-demo)
- [Styling Voiceflow Webchat](https://docs.voiceflow.com/docs/embed-customize-styling)
- [Voiceflow QR Code Extension](https://github.com/valgaze/voiceflow-qrcode)

## License

MIT

## Extension Description & Prompt Generation

The toolkit provides utility functions to generate descriptions and prompts for your extensions, which can be useful for LLM integration or documentation.

### `describeExtension`

This function generates a detailed description of an extension, including its name, LLM description, inputs, and outputs.

```typescript
import { describeExtension } from "./util/extensions/describe";

const description = describeExtension(MyExtension);
console.log(description);
```

### `generateExtensionPrompt`

Generates a formatted prompt for a single extension, suitable for use with LLMs.

```typescript
import { generateExtensionPrompt } from "./util/extensions/describe";

const prompt = generateExtensionPrompt(MyExtension);
console.log(prompt);
```

### `generateExtensionsPrompt`

Generates a single prompt for multiple extensions, separated by '---'.

```typescript
import { generateExtensionsPrompt } from "./util/extensions/describe";

const prompt = generateExtensionsPrompt([MyExtension, AnotherExtension]);
console.log(prompt);
```

### Example Usage in Agent Step

You can generate a prompt for your extensions and pass it to the Voiceflow agent as part of the launch event:

```javascript
<script type="module">
import { generateExtensionsPrompt } from './util/extensions/describe';
import { RecorderExtension, StarRaterExtension } from './bundled.js';

const extensions = [RecorderExtension, StarRaterExtension];

window.voiceflow.chat.load({
    assistant: {
        extensions: extensions
    },
    verify: {
        projectID: 'YOUR_PROJECT_ID'
    },
    url: 'https://general-runtime.voiceflow.com',
    versionID: 'production',
    launch: {
        event: {
            type: 'launch',
            payload: {
                EXTENSIONS_PROMPT: generateExtensionsPrompt(extensions)
            }
        }
    }
});
</script>
```

This allows you to dynamically provide extension information to your Voiceflow agent at runtime.
