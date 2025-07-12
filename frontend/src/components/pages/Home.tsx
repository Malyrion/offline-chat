import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import { Button, Box, Center, Text } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();
  const { username, clearUser } = useUserStore();

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Box w="100%" maxW="sm" p={8} borderRadius="lg" boxShadow="lg" bg="white" textAlign="center">
        <Text fontSize="2xl" mb={6}>Welcome{username ? `, ${username}` : ""}!</Text>
        <Button colorScheme="teal" size="lg" onClick={handleLogout} width="100%">
          Log Out
        </Button>
      </Box>
    </Center>
  );
};

export default Home;
