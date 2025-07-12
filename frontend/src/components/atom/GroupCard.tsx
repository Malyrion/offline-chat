import { Box, Text, Badge } from "@chakra-ui/react";
import type { Group } from "../../store/useGroupStore";

type GroupCardProps = {
  group: Group;
  joined?: boolean;
};

const GroupCard: React.FC<GroupCardProps> = ({ group, joined }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} boxShadow="md" bg="white">
    <Text fontWeight="bold" fontSize="lg">{group.groupName}</Text>
    <Text fontSize="sm" color="gray.500">Created by: {group.createdBy}</Text>
    <Text fontSize="sm" color="gray.500">Members: {group.members.length}</Text>
    {joined && <Badge colorScheme="teal" mt={2}>Joined</Badge>}
  </Box>
);

export default GroupCard;
