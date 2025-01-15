# Voiceflow Extension Development Kit

Build powerful, type-safe extensions for Voiceflow chat widgets using your favorite framework (React, Vue, Svelte) or vanilla JavaScript.

## Why Use This Kit

- 🔥 **Rapid Development**: Hot reloading and real-time testing in Storybook
- 🔒 **Type Safety**: Catch errors before runtime with TypeScript integration
- 🧪 **Easy Testing**: Test your extensions in isolation or with live Voiceflow widget
- 📦 **Framework Freedom**: Use React, Vue, Svelte, or vanilla JavaScript
- 🛠️ **Developer Tools**: Built-in debugging and development utilities
- 🔐 **Security First**: Controlled dependency management and secure builds

## Why This Kit Exists

While you can get quite far with vanilla JavaScript when building Voiceflow chat widgets, as your extensions grow more complex, you'll likely encounter several challenges:

- **Canvas-Code Disconnect**: There's often a broken linkage between what's configured in the Voiceflow canvas and your implementation code (extension id's, what payloads are sent/returned, etc)
- **Development Environment**: Testing changes requires constant redeployment to see results in the actual widget-- also nice to focus and build extensions isolation focusing on crafting the best experience
- **Source Control**: Managing versions and collaborating becomes difficult without proper source control
- **Security Concerns**: Using external libraries via CDNs can pose security risks in production environments
- **Type Safety**: Lack of type checking can lead to runtime errors

This toolkit addresses these challenges by providing a structured development environment with buttery-smooth tooling.

## Setup

```bash
# Clone the repository
git clone https://github.com/valgaze/extension-toolkit
cd extension-kit

# Create .env file (replace with your Voiceflow project ID)
echo "VITE_VOICEFLOW_PROJECT_ID=your_voiceflow_project_id" > .env

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

## Development Workflow

### Available Scripts

| Command                   | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `npm run storybook`       | Start Storybook development environment w/ HMR (port 6006)          |
| `npm run dev`             | Run extension in live Voiceflow widget with live-reload (port 5173) |
| `npm run build:extension` | Build production-ready extension bundle                             |
| `npm run serve:example`   | Build and serve example with bundled extension                      |

### Development Process

1. **Start in Storybook** (`npm run storybook`)

   - Develop components in isolation, write "stories" specifying the data from the Voiceflow canvas
   - Test all conversation paths
   - Hot Module Replacement (HMR) enabled, instant updates a soon as you make a change
   - Available at `http://localhost:6006`

2. **Test with Live Widget** (`npm run dev`)

   - Upload the **[Voiceflow Project File](./util/voiceflow_project_file.vf)** to your Voiceflow project and press "Run" to publish to the development environment
   - Test in real Voiceflow chat widget
   - Live-reload enabled
   - Available at `http://localhost:5173?autoload=true`

3. **Production Build** (`npm run build:extension`)
   - Bundle your extension for production
   - Output to `dist/` directory
   - Ready for inclusion into a voiceflow widge

## Resources

- [Voiceflow Extension Docs](https://docs.voiceflow.com/docs/custom-web-chat-widgets)
- [Voiceflow Extensions Starter Repo](https://github.com/voiceflow-gallagan/vf-extensions-demo)
- [Styling Voiceflow Webchat](https://docs.voiceflow.com/docs/embed-customize-styling)
- [Voiceflow QR Code Extension](https://github.com/valgaze/voiceflow-qrcode)

## License

MIT
