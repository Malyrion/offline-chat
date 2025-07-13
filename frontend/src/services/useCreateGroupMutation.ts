import { useMutation, useQueryClient } from "@tanstack/react-query";
import endpoints from "../api/endpoints";
import type { ICreateGroupPayload, ICreateGroupResponse } from "../domain";
import { useQueueStore, useGroupStore } from "../store";
import { generateUUID } from "../utils";
import axiosInstance from "../utils/axiosInstance";

const createGroup = async (payload: ICreateGroupPayload): Promise<ICreateGroupResponse> => {
  console.log("[CreateGroup] Sending payload to backend:", payload);
  const { data } = await axiosInstance.post<ICreateGroupResponse>(endpoints.group.createGroup(), payload);
  return data;
};

export const useCreateGroupMutation = () => {
  const queryClient = useQueryClient();
  const addAction = useQueueStore((state) => state.addAction);
  const setYourGroups = useGroupStore((state) => state.setYourGroups);
  const yourGroups = useGroupStore((state) => state.yourGroups);

  return useMutation({
    mutationFn: createGroup,
    onSuccess: (data, variables) => {
      const newGroup = {
        groupId: data.id,
        groupName: data.group_name,
        members: [variables.createdBy],
        createdBy: variables.createdBy,
      };
      setYourGroups([...yourGroups, newGroup]);
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error: any, variables) => {
      if (!error.response) {
        const localGroup = {
          groupId: generateUUID(),
          groupName: variables.groupName,
          members: [variables.createdBy],
          createdBy: variables.createdBy,
        };
        setYourGroups([...yourGroups, localGroup]);
        addAction({
          id: localGroup.groupId,
          type: "CREATE_GROUP",
          createdAt: Date.now(),
          payload: variables,
        });
      }
    },
    retry: false,
  });
};