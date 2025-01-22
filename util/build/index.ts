// Helpers for build process

export const checkProjectId = (VOICEFLOW_PROJECT_ID: string) => {
  if (!VOICEFLOW_PROJECT_ID || VOICEFLOW_PROJECT_ID === "__PLACEHOLDER__") {
    console.error(
      "⚠️ Oops! Something went wrong during the build\n" +
        "1️⃣ Copy the `.env.example` file to `.env`\n" +
        "2️⃣ Update the `.env` file with your project ID:\n   VITE_VOICEFLOW_PROJECT_ID=your-project-id-here\n" +
        "3️⃣ For detailed setup instructions, visit: https://github.com/valgaze/speedybot-toolkit/README.md#setup 📖"
    );
    process.exit(1);
  }
};

// Plugin for Vite to replace tokens in the template

type ReplaceTemplateOptions = {
  voiceflow_project_id: string;
  filename: string;
  extensionName: string;
  mode: string; // "development" | "production";
};

/*
  Decorates the template with the appropriate tokens
  Doing this statically to avoid minimization and build library in a single "step"
*/
export const decorateTemplate = ({
  template,
  options,
}: {
  template: string;
  options: ReplaceTemplateOptions;
}) => {
  const REPLACE_TOKENS = {
    PROJECT_ID: "__REPLACE__PROJECT_ID__",
    BUNDLE_FILENAME: "__REPLACE__BUNDLE__NAME__.js",
    BUNDLE_EXPORT_NAME: "__REPLACE__BUNDLE__EXPORT__NAME__",
    BUNDLE_ENVIRONMENT: "__REPLACE__BUNDLE__ENVIRONMENT__",
  };
  const modified = template
    .replace(REPLACE_TOKENS.PROJECT_ID, options.voiceflow_project_id)
    .replace(REPLACE_TOKENS.BUNDLE_FILENAME, options.filename)
    .replace(REPLACE_TOKENS.BUNDLE_EXPORT_NAME, options.extensionName)
    .replace(REPLACE_TOKENS.BUNDLE_ENVIRONMENT, options.mode)
    .replace(REPLACE_TOKENS.BUNDLE_ENVIRONMENT, options.mode);

  return modified;
};
