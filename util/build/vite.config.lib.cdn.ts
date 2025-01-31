import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const extensionEntryPoint = path.resolve(process.cwd(), "src", "index.tsx");
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    build: {
      lib: {
        entry: extensionEntryPoint,
        formats: ["iife"],
        name: "VoiceflowExtensions",
        fileName: (format) => `bundled_cdn.${format === "es" ? "mjs" : "js"}`,
      },
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
