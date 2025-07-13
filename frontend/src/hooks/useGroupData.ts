import { useEffect, useRef } from "react";
import { useUserStore } from "../store/useUserStore";
import { useGroupStore } from "../store/useGroupStore";
import { useCreateGroupMutation } from "../services/useCreateGroupMutation";
import { useJoinGroupMutation } from "../services/useJoinGroupMutation";
import { getGroupMutationAPI } from "../services/useGetGroupsMutation";

export const useGroupData = () => {
  const userId = useUserStore((state) => state.userId);
  const openGroups = useGroupStore((state) => state.openGroups);
  const yourGroups = useGroupStore((state) => state.yourGroups);
  const setOpenGroups = useGroupStore((state) => state.setOpenGroups);
  const setYourGroups = useGroupStore((state) => state.setYourGroups);

  const { mutate: createGroup } = useCreateGroupMutation();
  const { mutate: joinGroup } = useJoinGroupMutation();
  const mutationRef = useRef(getGroupMutationAPI());
  const { onGetGroupsMutationAPI } = mutationRef.current;

  useEffect(() => {
    if (userId) {
      onGetGroupsMutationAPI.mutate({ userId });
    }
  }, [userId]);

  const handleCreateGroup = (groupName: string) => {
    if (!userId) {
      console.log("No userId, not creating group");
      return;
    }
    console.log("Creating group:", groupName, "by", userId);
    createGroup({ groupName, createdBy: userId });
  };

  const handleJoinGroup = (groupId: string) => {
    if (!userId) return;
    joinGroup({ groupId, userId });
  };

  return {
    openGroups,
    yourGroups,
    handleCreateGroup,
    handleJoinGroup,
    setOpenGroups,
    setYourGroups,
  };
};