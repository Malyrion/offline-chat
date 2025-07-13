import { useMutation, useQueryClient } from "@tanstack/react-query";
import endpoints from "../api/endpoints";
import type { Group } from "../store/useGroupStore";
import { useQueueStore, useGroupStore } from "../store";
import { generateUUID } from "../utils";
import axiosInstance from "../utils/axiosInstance";

const joinGroup = async (payload: { groupId: string; userId: string }): Promise<Group> => {
  const { data } = await axiosInstance.post<Group>(endpoints.group.joinGroup(payload.groupId), {
    ...payload,
    joinDate: new Date().toISOString()
  });
  return data;
};

export const useJoinGroupMutation = () => {
  const queryClient = useQueryClient();
  const addAction = useQueueStore((state) => state.addAction);
  const setYourGroups = useGroupStore((state) => state.setYourGroups);
  const setOpenGroups = useGroupStore((state) => state.setOpenGroups);
  const yourGroups = useGroupStore((state) => state.yourGroups);
  const openGroups = useGroupStore((state) => state.openGroups);

  return useMutation({
    mutationFn: joinGroup,
    onSuccess: (data, variables) => {
      const groupToJoin = openGroups.find(g => g.groupId === variables.groupId);
      if (groupToJoin) {
        setOpenGroups(openGroups.filter(g => g.groupId !== variables.groupId));
        setYourGroups([...yourGroups, groupToJoin]);
      }      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error: any, variables) => {
      if (!error.response) {
        const groupToJoin = openGroups.find(g => g.groupId === variables.groupId);
        if (groupToJoin) {
          setOpenGroups(openGroups.filter(g => g.groupId !== variables.groupId));
          setYourGroups([...yourGroups, groupToJoin]);
        }
        addAction({
          id: generateUUID(),
          type: "JOIN_GROUP",
          createdAt: Date.now(),
          payload: variables,
        });
      }
    },
    retry: false,
  });
};
