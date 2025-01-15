import React, { useState } from "react";
import type { ExtensionPayload } from "./config";
import "./MyExtension.css";

const FormComponent: React.FC<ExtensionPayload> = ({
  title = "Contact Form",
  subtitle,
  fields = [],
  submitText = "Submit",
  theme = "light",
}) => {
  const [formData, setFormData] = useState<Record<string, string | string[]>>(
    {}
  );

  const handleChange = (name: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    name: string,
    option: string,
    checked: boolean
  ) => {
    const currentValues = (formData[name] as string[]) || [];
    const newValues = checked
      ? [...currentValues, option]
      : currentValues.filter((val) => val !== option);
    setFormData((prev) => ({ ...prev, [name]: newValues }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("formData", typeof formData, { formData });
    window.voiceflow?.chat?.interact({
      type: "complete",
      payload: formData,
    });
  };

  return (
    <div className="form-ext-wrapper">
      <div className={`form-ext-container ${theme}`}>
        {title && <h2 className="form-ext-title">{title}</h2>}
        {subtitle && <p className="form-ext-subtitle">{subtitle}</p>}

        <form onSubmit={handleSubmit} className="form-ext">
          {fields.map((field) => (
            <div key={field.name} className="form-ext-field">
              {field.label && (
                <label className="form-ext-label" htmlFor={field.name}>
                  {field.label}
                </label>
              )}

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={(formData[field.name] as string) || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                  minLength={field.minLength}
                  maxLength={field.maxLength}
                  className="form-ext-textarea"
                />
              ) : field.type === "radio" && field.options ? (
                <div className="form-ext-radio-group">
                  {field.options.map((option) => (
                    <label key={option} className="form-ext-radio-label">
                      <input
                        type="radio"
                        name={field.name}
                        value={option}
                        checked={(formData[field.name] as string) === option}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                        required={field.required}
                        className="form-ext-radio"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : field.type === "checkbox" && field.options ? (
                <div className="form-ext-checkbox-group">
                  {field.options.map((option) => (
                    <label key={option} className="form-ext-checkbox-label">
                      <input
                        type="checkbox"
                        name={field.name}
                        value={option}
                        checked={(
                          (formData[field.name] as string[]) || []
                        ).includes(option)}
                        onChange={(e) =>
                          handleCheckboxChange(
                            field.name,
                            option,
                            e.target.checked
                          )
                        }
                        className="form-ext-checkbox"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={(formData[field.name] as string) || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                  pattern={field.pattern}
                  minLength={field.minLength}
                  maxLength={field.maxLength}
                  className="form-ext-input"
                />
              )}
            </div>
          ))}

          <button type="submit" className="form-ext-submit">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
