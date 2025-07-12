import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Chat, Home } from "./components/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
