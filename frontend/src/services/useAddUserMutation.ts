import { useMutation } from "@tanstack/react-query";
import endpoints from "../api/endpoints";
import type { IAddUserPayload, IAddUserResponse } from "../domain";
import axiosInstance from "../utils/axiosInstance";

const addUser = async (
  payload: IAddUserPayload
): Promise<IAddUserResponse> => {
  const response = await axiosInstance.post<IAddUserResponse>(
    endpoints.authentication.loginUser(),
    payload
  );
  return response.data;
};

export const useAddUserMutationAPI = () => {
  return useMutation<IAddUserResponse, Error, IAddUserPayload>({
    mutationFn: async (payload) => {
      if (!navigator.onLine) {
        alert("You are offline. This action cannot be completed right now.");
        throw new Error("Offline");
      }

      return await addUser(payload);
    },
  });
};
