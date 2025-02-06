// This is bit overkill but the idea here is to:
// 1) Build the extension in library mode (so we can import it into the base html template)
// 2) generate a static index.html file that's not minimized
// 3) Generate and swap in project_id and the extension's import name + filename
// 4) This allows you to see/prove the extension in the voiceflow chat widget is importable into a simple html file
// 5) We're going to do some gross stuff to swap in the project_id and the extension's import name + filename rather than use vite
// we want the html UNMINIFIED so we can see the extension in the voiceflow chat widget and want to build this in library mode, so we're going to do it our way lol

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { promises as fs } from "fs";
import { checkProjectId, decorateTemplate } from "./index";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_VOICEFLOW_PROJECT_ID: VOICEFLOW_PROJECT_ID } = env;

  checkProjectId(VOICEFLOW_PROJECT_ID);
  return {
    // 🙃 Trick per https://vite.dev/guide/build#library-mode
    // React has old-school process.env.NODE_ENV check, Vite when not in library mode is much cleaner
    // So we need to trick React into thinking it's in production mode 🙃
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    build: {
      emptyOutDir: false,
      outDir: path.resolve(__dirname, "..", "..", "assets", "public"),
      minify: true,
      lib: {
        entry: path.resolve(__dirname, "..", "..", "src/index.tsx"),
        formats: ["es"],
        fileName: "bundled", // "bundled.js"
      },
      rollupOptions: {
        output: {
          preserveModules: false,
        },
      },
    },
    plugins: [
      react(),
      {
        name: "generate-index",
        async writeBundle(options, bundle) {
          const dist_output_file_name = "bundled.js"; // const [dist_output_file_name] = Object.keys(bundle);
          const exports_list = bundle[dist_output_file_name]["exports"];

          try {
            // Read in template
            const template = await fs.readFile(
              path.resolve(__dirname, "templates/index_public.html"),
              "utf-8"
            );

            // Modify template (we DO NOT want vite to bundle the html + extension, we're doing a library build but also using
            // the html template to see the extension in the voiceflow chat widget)
            const modified = decorateTemplate({
              template,
              options: {
                voiceflow_project_id: VOICEFLOW_PROJECT_ID,
                filename: dist_output_file_name,
                exports_list,
                mode,
              },
            });

            // Write this decorated example-bundled/index.html
            await fs.writeFile(
              path.resolve("assets", "public", "index.html"),
              modified
            );

            console.log("✅ Successfully generated example-bundled/index.html");
          } catch (error) {
            console.error("❌ Error generating index.html:", error);
            throw error;
          }
        },
      },
    ],
  };
});
