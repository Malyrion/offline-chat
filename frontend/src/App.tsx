import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Chat, Home } from "./components/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
