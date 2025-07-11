import { create } from 'zustand'
import { persist } from "zustand/middleware";
import { initalUserStoreValues } from './initalStoreValues';
import { asyncStorage } from './asyncStorage';

export type UserStore = {
  userId: string;
  username: string;
  setUserId: (userId: string) => void;
  setUsername: (username: string) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>()(
    persist(
      (set) => ({
        ...initalUserStoreValues,
        setUserId: (userId:string) => set({ userId }),
        setUsername: (username:string) => set({ username }),
        clearUser: () => set({...initalUserStoreValues}),
      }),
      { 
        name: "loggedInUserInformation",
        storage: asyncStorage,
      }
    )
);