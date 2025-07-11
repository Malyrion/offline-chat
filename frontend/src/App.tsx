import { useState } from "react";
import "./App.css";
import { ChatInput } from "./components/molecules";
import { useUserStore } from "./store/useUserStore";

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Store
  const { userId, username, setUsername } = useUserStore();

  console.log("User ID:", userId);
  console.log("Username:", username);

  const handleSend = () => {
    if (!text.trim()) return;
    setUsername(text);
    setText("");
  };

  return (
    <div>
      <p>Chat Service</p>
      <ChatInput
        value={text}
        onChange={handleInputChange}
        onSend={handleSend}
      />
    </div>
  );
}

export default App;
