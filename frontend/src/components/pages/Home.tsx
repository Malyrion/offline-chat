import { useNavigate } from "react-router-dom";
import { useUserStore, useQueueStore } from "../../store";
import { Box, Center, Text, VStack, Code } from "@chakra-ui/react";
import GroupList from "../molecules/GroupList";
import MainButton from "../atom/MainButton";
import { useGroupData } from "../../hooks/useGroupData";

const Home = () => {
  const navigate = useNavigate();
  const { username, clearUser } = useUserStore();
  const { clearQueue, actionQueue } = useQueueStore();
  const { openGroups, yourGroups, handleCreateGroup, handleJoinGroup } =
    useGroupData();

  const handleLogout = () => {
    clearUser();
    clearQueue();
    navigate("/");
  };

  const handleOpenChat = (groupId: string) => {
    navigate(`/chat/${groupId}`);
  };

  // Example: prompt for group name (replace with your own UI)
  const onCreateGroupClick = () => {
    const groupName = window.prompt("Enter group name:");
    if (groupName) handleCreateGroup(groupName);
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Box w="100%" maxW="md" p={8} borderRadius="lg" boxShadow="lg" bg="white">
        <VStack gap={4} mb={8}>
          <Text fontSize="2xl" fontWeight="bold">
            Welcome{username ? `, ${username}` : ""}!
          </Text>
          <MainButton title="Log Out" onClick={handleLogout} />
        </VStack>
        <MainButton title="Create Group" onClick={onCreateGroupClick} mb={8} />
        <GroupList
          title="Open Groups"
          groups={openGroups}
          onOpenChat={handleOpenChat}
          onJoinGroup={handleJoinGroup}
        />
        <GroupList
          title="Your Groups"
          groups={yourGroups}
          joined
          onOpenChat={handleOpenChat}
        />

        <Text fontSize="md" fontWeight="bold" mb={2}>
          Offline Queue
        </Text>
        {actionQueue.length === 0 ? (
          <Text color="gray.400">No offline actions queued.</Text>
        ) : (
          <VStack align="stretch" gap={2}>
            {actionQueue.map((action) => (
              <Box key={action.id} p={2} borderRadius="md" bg="gray.100">
                <Text fontSize="sm">
                  Type: <Code>{action.type}</Code>
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Created: {new Date(action.createdAt).toLocaleString()}
                </Text>
                <Code fontSize="xs" mt={1} whiteSpace="pre-wrap">
                  {JSON.stringify(action.payload, null, 2)}
                </Code>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Center>
  );
};

export default Home;
