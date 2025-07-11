import React from "react";
import { useColors } from "../../hooks/useColors";

export type InputVariants = "primary" | "secondary" | "outline";

export type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: InputVariants;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: string;
  name?: string;
  autoFocus?: boolean;
};

const InputField: React.FC<Readonly<InputFieldProps>> = ({
  value,
  onChange,
  placeholder = "",
  variant = "primary",
  isDisabled = false,
  isLoading = false,
  type = "text",
  name,
  autoFocus = false,
}) => {
  const { primary, secondary, white, neutral } = useColors();

  let backgroundColor = white;
  let color = primary;
  let border = `2px solid ${primary}`;

  if (variant === "secondary") {
    border = `2px solid ${secondary}`;
    color = secondary;
  } else if (variant === "outline") {
    border = `2px solid ${primary}`;
    backgroundColor = "transparent";
    color = primary;
  }

  if (isDisabled || isLoading) {
    backgroundColor = neutral;
    color = white;
    border = `2px solid ${neutral}`;
  }

  return (
    <div
      style={{ position: "relative", display: "inline-block", width: "100%" }}
    >
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled || isLoading}
        autoFocus={autoFocus}
        style={{
          backgroundColor,
          color,
          border,
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          fontSize: "1rem",
          width: "100%",
          boxSizing: "border-box",
          opacity: isDisabled || isLoading ? 0.7 : 1,
          transition: "border 0.2s, color 0.2s, background 0.2s",
        }}
      />
      {isLoading && (
        <span
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            color: neutral,
            fontSize: "0.9rem",
            pointerEvents: "none",
          }}
        >
          Loading...
        </span>
      )}
    </div>
  );
};

export default InputField;
