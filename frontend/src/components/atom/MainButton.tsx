import React from "react";
import { useColors } from "../../hooks/useColors";

export type ButtonVariants = "primary" | "secondary" | "outline";

export type ButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariants;
  isDisabled?: boolean;
  isLoading?: boolean;
  title?: string;
};

const Button: React.FC<Readonly<ButtonProps>> = ({
  title,
  variant = "primary",
  onClick,
  isLoading = false,
  isDisabled = false,
}) => {
  const { primary, secondary, white, neutral } = useColors();

  let backgroundColor = primary;
  let color = white;
  let border = "none";

  if (variant === "secondary") {
    backgroundColor = secondary;
    color = white;
  } else if (variant === "outline") {
    backgroundColor = "transparent";
    color = primary;
    border = `2px solid ${primary}`;
  }

  if (isDisabled || isLoading) {
    backgroundColor = neutral;
    color = white;
    border = "none";
  }

  return (
    <button
      type="button"
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      disabled={isDisabled || isLoading}
      style={{
        backgroundColor,
        color,
        border,
        padding: "0.5rem 1.5rem",
        borderRadius: "4px",
        cursor: isDisabled || isLoading ? "not-allowed" : "pointer",
        opacity: isDisabled || isLoading ? 0.7 : 1,
        fontWeight: 600,
        fontSize: "1rem",
        transition: "background 0.2s, color 0.2s",
      }}
    >
      {isLoading ? "Loading..." : title}
    </button>
  );
};

export default Button;
