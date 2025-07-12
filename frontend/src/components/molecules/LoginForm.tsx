import React from "react";
import { VStack } from "@chakra-ui/react";
import InputField from "../atom/InputField";
import MainButton from "../atom/MainButton";
import AppIcon from "../atom/AppIcon";

export type LoginFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
};

const LoginForm: React.FC<Readonly<LoginFormProps>> = ({
  value,
  onChange,
  onSend,
  isLoading = false,
  isDisabled = false,
  placeholder = "User Name",
}) => {
  return (
    <VStack gap={8} width="100%" alignItems="center">
      <AppIcon />
      <InputField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
      />
      <MainButton
        title="Log In"
        onClick={onSend}
        disabled={isDisabled || isLoading || !value.trim()}
        isLoading={isLoading}
      />
    </VStack>
  );
};

export default LoginForm;
