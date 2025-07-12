import { useNavigate } from "react-router-dom";
import { useUserStore, useQueueStore } from "../../store";
import { Box, Center, Text, VStack } from "@chakra-ui/react";
import GroupList from "../molecules/GroupList";
import MainButton from "../atom/MainButton";

const staticOpenGroups = [
  {
    groupId: "1",
    groupName: "Open Group 1",
    members: ["a", "b"],
    createdBy: "Alice",
  },
  { groupId: "2", groupName: "Open Group 2", members: ["c"], createdBy: "Bob" },
];
const staticYourGroups = [
  {
    groupId: "3",
    groupName: "My Group",
    members: ["me", "d"],
    createdBy: "Me",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { username, clearUser } = useUserStore();
  const { clearQueue } = useQueueStore();

  const handleLogout = () => {
    clearUser();
    clearQueue();
    navigate("/");
  };

  const handleCreateGroup = () => {
    alert("Create Group clicked!");
  };

  const handleOpenChat = (groupId: string) => {
    navigate(`/chat/${groupId}`);
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
        <MainButton title="Create Group" onClick={handleCreateGroup} mb={8} />
        <GroupList
          title="Open Groups"
          groups={staticOpenGroups}
          onOpenChat={handleOpenChat}
        />
        <GroupList
          title="Your Groups"
          groups={staticYourGroups}
          joined
          onOpenChat={handleOpenChat}
        />
      </Box>
    </Center>
  );
};

export default Home;
