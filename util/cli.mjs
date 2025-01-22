#!/usr/bin/env node

import readline from "readline";
import fs from "fs";

let voiceflowId = process.argv[2];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
🚀 Welcome to the Voiceflow Extension Development Kit setup!

To get your Voiceflow project ID:
1. Visit your Voiceflow project settings
2. Create a project & import the template if you don't have one yet:
   https://github.com/valgaze/extension-toolkit/raw/main/assets/voiceflow_project_file.vf
3. Find your Project ID in the settings panel of your project

📚 For complete setup instructions, visit:
   https://github.com/valgaze/extension-toolkit/blob/main/README.md#setup
`);

async function promptForProjectId() {
  // If voiceflowId was provided as argument, use it directly
  const projectId =
    voiceflowId ||
    (await new Promise((resolve) => {
      rl.question("Enter your Voiceflow project ID: ", resolve);
    }));

  if (
    !projectId ||
    projectId.trim() === "" ||
    (typeof projectId == "string" && projectId.length < 10)
  ) {
    console.log("❌ Project ID is invalid. Please try again.");
    voiceflowId = null;
    return promptForProjectId();
  }

  try {
    fs.writeFileSync(".env", `VITE_VOICEFLOW_PROJECT_ID=${projectId}\n`);
    console.log("\n✅ Successfully wrote project ID to .env file!");
    console.log("\n🎉 Setup complete! Next steps:");
    console.log(
      "1. Run 'npm run storybook' to start developing your extension"
    );
    console.log(
      "2. Visit the docs for more info: https://github.com/valgaze/extension-toolkit#setup"
    );
  } catch (err) {
    console.error("❌ Error writing to .env file:", err);
  }

  rl.close();
}

// Skip the prompt if valid voiceflowId was provided
if (voiceflowId && voiceflowId.length >= 10) {
  promptForProjectId();
} else if (voiceflowId) {
  console.log("❌ Provided project ID is invalid.");
  promptForProjectId();
} else {
  promptForProjectId();
}
