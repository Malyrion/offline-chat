import React from "react";
import { Input } from "@chakra-ui/react";
import type { InputProps } from "@chakra-ui/react";

export type InputFieldProps = InputProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputField: React.FC<Readonly<InputFieldProps>> = ({
  value,
  onChange,
  placeholder = "",
  ...rest
}) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size="lg"
      variant="outline"
      {...rest}
    />
  );
};

export default InputField;
