# See here for setup instructions: https://github.com/valgaze/extension-toolkit/blob/main/README.md#setup

# Voiceflow React Extension Generator Prompt

## Your Extension Requirements (fill this out!)

1. Extension Name: [Your extension name]
2. Extension ID: [Unique identifier for your extension, e.g. "ext_my_feature"]
3. Purpose: [Briefly describe what your extension should do]
4. Data to collect/display: [List the data fields or display elements needed]
5. Interaction type:
   - [ ] Sends data to conversation diagram submission
   - [ ] Display only
   - [ ] Other (specify)

## UI Components Needed

List the React components you need:

- [ ] Input fields
- [ ] Buttons
- [ ] Display panels
- [ ] Custom elements from libraries (specify)

## Styling Preferences

- Theme support: [light/dark/both]

## Data Flow

1. Data FROM Voiceflow canvas:
   - [List expected input data structure]
2. Data TO Voiceflow canvas:
   - [Describe what data should be sent back]

## Additional Requirements

- Special validations: [Any validation rules]
- Accessibility needs: [Any accessibility requirements]
- Browser compatibility: [Any specific browser requirements]
- Mobile responsiveness: [Any mobile-specific needs]

## Example Usage

Provide an example of how you want to use this in Voiceflow:

```
[Describe a conversation flow example where your extension would be used]
```

## TASK: Generate a file MyExtension.tsx which the user can use in their voiceflow project, swap out the code below with the code you generate based on the requirements from the user

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { extension_config, type ExtensionPayload } from "./config";
import FormComponent from "./component/FormComponent.tsx";

// Extension Configuration
const extension_config = {
  id: "ext_my_feature",
  reference_name: "MyExtension",
  supports_dark_mode: true,
};

// Extension Payload types
type ExtensionPayload = {
  title: string;
  rating: number;
};

const FormComponent: React.FC<ExtensionPayload> = (props) => {
  const onClick = () => {
    const submittedData = {
      a: 1,
      b: 2,
    };
    window.voiceflow?.chat?.interact({
      type: "complete",
      payload: submittedData,
    });
  };
  return (
    <div className="form-ext-wrapper" onClick={onClick}>
      {props.title || "Hello World"} The rating is {props.rating}
    </div>
  );
};

const styles = `
  .form-ext-wrapper {
    background: red;
    color: white;
  }
`;

export const FormExtension = {
  name: extension_config.reference_name,
  type: "response",
  match: ({ trace }) =>
    trace.type === extension_config.id ||
    trace.payload?.name === extension_config.id,
  render: ({ element, trace }) => {
    const shadow = element.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);
    shadow.appendChild(container);

    const root = ReactDOM.createRoot(container);
    const payload = trace.payload;
    root.render(<FormComponent {...payload} />);

    return () => {
      root.unmount();
    };
  },
};
```
