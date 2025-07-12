import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import LoginForm from "../molecules/LoginForm";
import { Box, Center } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useUserStore();
  const [input, setInput] = React.useState("");

  useEffect(() => {
    if (username) {
      navigate("/");
    }
  }, [username, navigate]);

  const handleLogin = () => {
    if (input.trim()) {
      setUsername(input.trim());
      // API call can be added here later
    }
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Box w="100%" maxW="sm" p={8} borderRadius="lg" boxShadow="lg" bg="white">
        <LoginForm
          value={input}
          onChange={e => setInput(e.target.value)}
          onSend={handleLogin}
        />
      </Box>
    </Center>
  );
};

export default Login;
