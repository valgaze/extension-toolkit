// Build library version of the extension for importing into the voiceflow chat widget
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { checkProjectId } from "./index.ts";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_VOICEFLOW_PROJECT_ID: VOICEFLOW_PROJECT_ID } = env;

  checkProjectId(VOICEFLOW_PROJECT_ID);

  const extensionPath = path.resolve(
    process.cwd(),
    "src",
    "extensions",
    "MyExtension.tsx"
  );
  return {
    // 🙃 Trick per https://vite.dev/guide/build#library-mode
    // React has old-school process.env.NODE_ENV check, Vite when not in library mode is much cleaner
    // So we need to trick React into thinking it's in production mode 🙃
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    build: {
      lib: {
        entry: extensionPath,
        formats: ["es"],
        fileName: "bundled",
      },
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: false,
        },
      },
    },
    plugins: [react()],
  };
});
