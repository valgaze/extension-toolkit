// Used for local development, see build/ for creating bundled library version
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
  },
  build: {
    cssCodeSplit: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
