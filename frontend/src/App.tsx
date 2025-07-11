import { useState } from "react";
import "./App.css";
import { Button, InputField } from "./components/atom/";

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p>Chat Service</p>
      <Button title="Log In" variant="primary" onClick={() => alert(text)} />
      <InputField
        value={text}
        placeholder="Enter your username"
        variant="primary"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default App;
