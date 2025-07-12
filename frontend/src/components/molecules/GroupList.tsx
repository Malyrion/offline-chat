import { VStack, Text, Button } from "@chakra-ui/react";
import GroupCard from "../atom/GroupCard";
import type { Group } from "../../store/useGroupStore";

type GroupListProps = {
  title: string;
  groups: Group[];
  joined?: boolean;
  onOpenChat?: (groupId: string) => void;
};

const GroupList: React.FC<GroupListProps> = ({ title, groups, joined, onOpenChat }) => (
  <VStack align="stretch" gap={4} mb={8}>
    <Text fontSize="xl" fontWeight="bold" mb={2}>{title}</Text>
    {groups.length === 0 ? (
      <Text color="gray.400">No groups to show.</Text>
    ) : (
      groups.map((group) => (
        <div key={group.groupId}>
          <GroupCard group={group} joined={joined} />
          {onOpenChat && (
            <Button size="sm" colorScheme="teal" mt={2} onClick={() => onOpenChat(group.groupId)}>
              Open Chat
            </Button>
          )}
        </div>
      ))
    )}
  </VStack>
);

export default GroupList;
