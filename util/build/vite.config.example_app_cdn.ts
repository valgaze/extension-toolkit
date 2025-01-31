import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { promises as fs } from "fs";
import { checkProjectId, decorateTemplate } from "./index";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_VOICEFLOW_PROJECT_ID: VOICEFLOW_PROJECT_ID } = env;
  checkProjectId(VOICEFLOW_PROJECT_ID);

  const extensionEntryPoint = path.resolve(process.cwd(), "src", "index.tsx");
  const GLOBAL_NAME = "VoiceflowExtensions"; // use window.VoiceflowExtensions to access the extensions

  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    build: {
      emptyOutDir: false,
      outDir: path.resolve(__dirname, "..", "..", "example-bundled"),
      lib: {
        entry: extensionEntryPoint,
        formats: ["iife"],
        name: GLOBAL_NAME,
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
    plugins: [
      react(),
      {
        name: "generate-index",
        async writeBundle(options, bundle) {
          const dist_output_file_name = "bundled_cdn.js"; // const [dist_output_file_name] = Object.keys(bundle);
          const exports_list = bundle[dist_output_file_name]["exports"];

          try {
            // Read in template
            const template = await fs.readFile(
              path.resolve(__dirname, "templates/index_prod.html"),
              "utf-8"
            );

            // Modify template (we DO NOT want vite to bundle the html + extension, we're doing a library build but also using
            // the html template to see the extension in the voiceflow chat widget)
            let modified = decorateTemplate({
              template,
              options: {
                voiceflow_project_id: VOICEFLOW_PROJECT_ID,
                filename: GLOBAL_NAME,
                exports_list,
                mode,
              },
            });

            // Remove leading ./ from global import name
            // FROM: import { a , b } from bundle
            // TO: const { a , b } = window.VoiceflowExtensions
            modified = modified.replace(`import { `, `const { `);
            modified = modified.replace(
              `from './${GLOBAL_NAME}'`,
              `= window.${GLOBAL_NAME}`
            );

            // Add import of extensions
            modified = modified.replace(
              `<script type="module">`,
              `<script src="./bundled_cdn.js"></script>
<script type="module">`
            );

            // Write this decorated example-bundled/index.html
            await fs.writeFile(
              path.resolve("example-bundled/index.html"),
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
