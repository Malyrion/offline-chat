import React from "react";
import { InputField, Button } from "../atom";

export type ChatInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
};

const ChatInput: React.FC<Readonly<ChatInputProps>> = ({
  value,
  onChange,
  onSend,
  isLoading = false,
  isDisabled = false,
  placeholder = "Type your message...",
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <InputField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isLoading={isLoading}
        variant="primary"
      />
      <Button
        title="Send"
        onClick={onSend}
        isDisabled={isDisabled || isLoading || !value.trim()}
        isLoading={isLoading}
        variant="primary"
      />
    </div>
  );
};

export default ChatInput;
