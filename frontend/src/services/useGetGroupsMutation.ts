import { useMutation, useQueryClient } from "@tanstack/react-query";
import endpoints from "../api/endpoints";
import type {IGetGroupsPayload, IGetGroupsResponse, ICreateGroupResponse} from "../domain";
import  axiosInstance  from "../utils/axiosInstance";
import { useGroupStore } from "../store/useGroupStore";

const getGroups = async (payload:  IGetGroupsPayload): Promise< IGetGroupsResponse> => {
    try {
        const {data} = await axiosInstance.get< IGetGroupsResponse>(
            endpoints.group.getGroups(payload.userId),
        );
        return data;
    } catch (error: any) {
        console.error("Error getting groups:", error);
        if (error.response) {
            throw new Error(`Error getting groups: ${error.response.data.message}`);
        }
        throw new Error("Error getting groups: Network error or server not responding");
    }
};

// Map API group to Zustand Group type
function mapApiGroupToGroup(apiGroup: ICreateGroupResponse): import("../store/useGroupStore").Group {
  return {
    groupId: apiGroup.id,
    groupName: apiGroup.group_name,
    members: [], 
    createdBy: apiGroup.created_by,
  };
}

 export const getGroupMutationAPI = () => {
  const queryClient = useQueryClient();
  const setOpenGroups = useGroupStore((state) => state.setOpenGroups);
  const setYourGroups = useGroupStore((state) => state.setYourGroups);
  const onGetGroupsMutationAPI = useMutation({
    mutationFn: async (payload: IGetGroupsPayload) => {
      const response = await getGroups(payload);
      return response;
    },
    onSuccess: (data) => {
      setOpenGroups((data.openGroups || []).map(mapApiGroupToGroup));
      setYourGroups((data.yourGroups || []).map(mapApiGroupToGroup));
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      console.log("Groups get successfully:", data);
    },
    onError: (error) => {
      console.error("Error getting groups:", error);
    },
    retry: false,
  })
  return {
    onGetGroupsMutationAPI,
  }
};