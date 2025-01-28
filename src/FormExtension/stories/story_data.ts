import type { FormField, ExtensionPayload } from "./../config.ts";

// Data payloads for storybook stories (this is JSON you pass down to the extension from voiceflow canvas)
const forms: Record<string, ExtensionPayload> = {
  contactForm: {
    title: "Contact Us",
    subtitle: "We'll get back to you as soon as possible",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Full Name",
        placeholder: "John Doe",
        required: true,
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "john@example.com",
        required: true,
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone",
        placeholder: "+1 (555) 000-0000",
      },
      {
        name: "message",
        type: "textarea",
        label: "Message",
        placeholder: "How can we help?",
        required: true,
      },
      {
        name: "preferred_contact",
        type: "radio",
        label: "Preferred Contact Method",
        options: ["Email", "Phone", "Either"],
        required: true,
      },
    ],
    submitText: "Send Message",
  },
  feedbackForm: {
    title: "Share Your Experience",
    subtitle: "Help us improve our service",
    fields: [
      {
        name: "rating",
        type: "radio",
        label: "How would you rate your experience?",
        options: ["Excellent", "Good", "Fair", "Poor"],
        required: true,
      },
      {
        name: "improvements",
        type: "checkbox",
        label: "What areas need improvement?",
        options: [
          "Product Selection",
          "Website Navigation",
          "Customer Service",
          "Delivery Speed",
          "Price",
        ],
      },
      {
        name: "comments",
        type: "textarea",
        label: "Additional Comments",
        placeholder: "Tell us more about your experience...",
      },
      {
        name: "email",
        type: "email",
        label: "Email (optional)",
        placeholder: "For follow-up if needed",
      },
    ],
    submitText: "Submit Feedback",
  },
  subscriptionForm: {
    title: "Customize Your Updates",
    subtitle: "Get personalized news and offers",
    fields: [
      {
        name: "email",
        type: "email",
        label: "Email Address",
        placeholder: "your@email.com",
        required: true,
      },
      {
        name: "interests",
        type: "checkbox",
        label: "I'm interested in",
        options: [
          "New Products",
          "Special Offers",
          "Tips & Tutorials",
          "Company News",
          "Events",
        ],
        required: true,
      },
      {
        name: "frequency",
        type: "radio",
        label: "Preferred Update Frequency",
        options: ["Daily", "Weekly", "Monthly"],
        required: true,
      },
      {
        name: "name",
        type: "text",
        label: "Name (for personalized content)",
        placeholder: "Your name",
      },
    ],
    submitText: "Start My Subscription",
    theme: "light",
  },
};

// Run directly to get copy/paste'able JSON and voiceflow canvas code to grab these values
const formTemplates = {
  contactForm: {
    form: forms.contactForm,
    template: `Thank you for reaching out! We've received your message:
Name: {name}
Email: {email}
Phone: {phone}
Message: {message}
Preferred Contact Method: {preferred_contact}

We'll get back to you as soon as possible!`,
  },
  feedbackForm: {
    form: forms.feedbackForm,
    template: `Thank you for your feedback! Here's what you shared:
Rating: {rating}
Areas for Improvement: {improvements}
Additional Comments: {comments}
Follow-up Email: {email}

Your feedback helps us improve our service!`,
  },
  subscriptionForm: {
    form: forms.subscriptionForm,
    template: `Welcome aboard! Your subscription preferences have been saved:
Email: {email}
Name: {name}
Selected Topics: {interests}
Update Frequency: {frequency}

You'll start receiving updates according to your preferences!`,
  },
} as const;

function generateVoiceflowCode(formTemplate): string {
  const { form } = formTemplate;
  const assignments = form.fields
    .map((field) => `${field.name} = last_event.payload.${field.name}`)
    .join("\n");

  return `// Raw form data:
${JSON.stringify(form, null, 2)}

// ----------------------------------------

// Voiceflow variable assignments:
${assignments}

// Template for response:
response = \`${formTemplate.template}\`

// Pretty console output for debugging:
console.log('Form submission:', {
${form.fields.map((field) => `  ${field.name}`).join(",\n")}
})`;
}

export { forms, formTemplates, generateVoiceflowCode };
