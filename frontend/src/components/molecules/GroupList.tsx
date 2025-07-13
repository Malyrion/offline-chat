import { VStack, Text, Button, Box } from "@chakra-ui/react";
import GroupCard from "../atom/GroupCard";
import type { Group } from "../../store/useGroupStore";

type GroupListProps = {
  title: string;
  groups: Group[];
  joined?: boolean;
  onOpenChat?: (groupId: string) => void;
  onJoinGroup?: (groupId: string) => void;
};

const GroupList: React.FC<GroupListProps> = ({ title, groups, joined, onOpenChat, onJoinGroup }) => (
  <VStack align="stretch" gap={4} mb={8}>
    <Text fontSize="xl" fontWeight="bold" mb={2}>{title}</Text>
    {groups.length === 0 ? (
      <Text color="gray.400">No groups to show.</Text>
    ) : (
      groups.map((group, index) => (
        <Box
          key={group.groupId || `group-${index}`}
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          mb={4}
          boxShadow="md"
          bg="white"
        >
          <GroupCard group={group} joined={joined} />
          <Box display="flex" gap={2} mt={2} justifyContent="space-between">
            {onOpenChat && (
              <Button size="sm" colorScheme="teal" onClick={() => onOpenChat(group.groupId)}>
                Open Chat
              </Button>
            )}
            {!joined && onJoinGroup && (
              <Button size="sm" colorScheme="blue" onClick={() => onJoinGroup(group.groupId)}>
                Join Group
              </Button>
            )}
          </Box>
        </Box>
      ))
    )}
  </VStack>
);

export default GroupList;
