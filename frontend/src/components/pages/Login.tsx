import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import LoginForm from "../molecules/LoginForm";
import { Box, Center } from "@chakra-ui/react";
import { useAddUserMutationAPI } from "../../services";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState("");

  // API
  const { mutate: loginUser } = useAddUserMutationAPI();

  // Store
  const { username, setUsername } = useUserStore();

  useEffect(() => {
    if (username) {
      navigate("/home");
    }
  }, [username, navigate]);

  const handleLogin = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setUsername(trimmed);
    loginUser(undefined, {
      onSuccess: () => {
        navigate("/home");
      },
      onError: () => {
        // Handle error (e.g., show toast or message)
      },
    });
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Box w="100%" maxW="sm" p={8} borderRadius="lg" boxShadow="lg" bg="white">
        <LoginForm
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={handleLogin}
        />
      </Box>
    </Center>
  );
};

export default Login;
