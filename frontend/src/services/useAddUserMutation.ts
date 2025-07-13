import { useMutation } from "@tanstack/react-query";
import endpoints from "../api/endpoints";
import type { IAddUserPayload, IAddUserResponse, UserEntity} from "../domain";
import { useQueueStore,useUserStore } from "../store";
import { generateUUID } from "../utils";
import  axiosInstance  from "../utils/axiosInstance";

const addUser = async (payload: IAddUserPayload): Promise<UserEntity> => {
  const response = await axiosInstance.post<IAddUserResponse>(
    endpoints.authentication.loginUser(),
    payload
  );
  return response.data.user;
};

 export const useAddUserMutationAPI = () => {
  const addAction = useQueueStore((state) => state.addAction);
  const setUserId = useUserStore((state) => state.setUserId);
  const username = useUserStore((state) => state.username);

  return useMutation<UserEntity, Error, void>({
    mutationFn: async () => {
      if (!username) throw new Error("Username is not set");

      try {
        const response = await addUser({ username });
        setUserId(response.id);
        return response;
      } catch (error) {
        addAction({
          id: generateUUID(),
          type: "LOGIN",
          createdAt: Date.now(),
          payload: { username },
        });

        throw new Error("User creation failed. Queued for retry.");
      }
    },
  });
};