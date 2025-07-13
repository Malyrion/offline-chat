import { Text, Badge } from "@chakra-ui/react";
import type { Group } from "../../store/useGroupStore";

type GroupCardProps = {
  group: Group;
  joined?: boolean;
};

const GroupCard: React.FC<GroupCardProps> = ({ group, joined }) => (
  <>
    <Text fontWeight="bold" fontSize="lg">{group.groupName}</Text>
    <Text fontSize="sm" color="gray.500">Created by: {group.createdBy}</Text>
    <Text fontSize="sm" color="gray.500">Members: {group.members.length}</Text>
    {joined && <Badge colorScheme="teal" mt={2}>Joined</Badge>}
  </>
);

export default GroupCard;
