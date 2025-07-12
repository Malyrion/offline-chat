import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Center, VStack, Text, Input, Button } from "@chakra-ui/react";
import { useChatStore } from "../../store/useChatStore";

// Mocked messages for demonstration
const mockMessages = [
  { sender: "Alice", text: "Hello from Alice!", timestamp: new Date().toISOString() },
  { sender: "Bob", text: "Hi Alice!", timestamp: new Date().toISOString() },
];

const Chat = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { groupMessages, addMessage, setMessages, currentGroupId, setCurrentGroupId } = useChatStore();

  // On mount: set current group and mock messages if not present
  useEffect(() => {
    if (!groupId) {
      navigate("/home");
      return;
    }
    setCurrentGroupId(groupId);
    if (!groupMessages[groupId]) {
      setMessages(groupId, mockMessages);
    }
  }, [groupId, setCurrentGroupId, setMessages, groupMessages, navigate]);

  const messages = groupId ? groupMessages[groupId] || [] : [];

  const handleSend = () => {
    if (!input.trim() || !groupId) return;
    addMessage(groupId, {
      sender: "Me",
      text: input.trim(),
      timestamp: new Date().toISOString(),
    });
    setInput("");
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Box w="100%" maxW="md" p={8} borderRadius="lg" boxShadow="lg" bg="white">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Group Chat: {groupId}
        </Text>
        <VStack align="stretch" gap={2} mb={4} maxH="50vh" overflowY="auto">
          {messages.length === 0 ? (
            <Text color="gray.400">No messages yet.</Text>
          ) : (
            messages.map((msg, idx) => (
              <Box key={idx} p={2} borderRadius="md" bg={msg.sender === "Me" ? "teal.100" : "gray.100"}>
                <Text fontWeight="bold">{msg.sender}</Text>
                <Text>{msg.text}</Text>
                <Text fontSize="xs" color="gray.500">{new Date(msg.timestamp).toLocaleTimeString()}</Text>
              </Box>
            ))
          )}
        </VStack>
        <VStack gap={2} direction="row">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />
          <Button colorScheme="teal" onClick={handleSend} width="100%">
            Send
          </Button>
        </VStack>
        <Button mt={4} variant="outline" onClick={() => navigate("/home")}>
          Back to Home
        </Button>
      </Box>
    </Center>
  );
};

export default Chat;
