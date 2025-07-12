import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

export type ButtonVariants = "primary" | "secondary" | "outline";

export type MainButtonProps = ChakraButtonProps & {
  variant?: ButtonVariants;
  isLoading?: boolean;
  isDisabled?: boolean;
  title?: string;
};

const MainButton: React.FC<Readonly<MainButtonProps>> = ({
  title,
  variant = "primary",
  onClick,
  isLoading = false,
  isDisabled = false,
  ...rest
}) => {
  const { primary, secondary, white, neutral } = useColors();

  let bg = primary;
  let color = white;
  let border = "none";

  if (variant === "secondary") {
    bg = secondary;
    color = white;
  } else if (variant === "outline") {
    bg = "transparent";
    color = primary;
    border = `2px solid ${primary}`;
  }

  if (isDisabled || isLoading) {
    bg = neutral;
    color = white;
    border = "none";
  }

  return (
    <ChakraButton
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      size="lg"
      width="100%"
      background={bg}
      color={color}
      border={border}
      _hover={{ opacity: 0.9 }}
      _active={{ opacity: 0.8 }}
      {...rest}
    >
      {title}
    </ChakraButton>
  );
};

export default MainButton;
