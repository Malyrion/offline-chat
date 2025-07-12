import { create } from 'zustand'
import { persist,devtools } from "zustand/middleware";
import { initialUserStoreValues } from './initialStoreValues';
import { asyncStorage } from './asyncStorage';

export type UserStore = {
  userId: string;
  username: string;
  setUserId: (userId: string) => void;
  setUsername: (username: string) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialUserStoreValues,
        setUserId: (userId:string) => set({ userId }),
        setUsername: (username:string) => set({ username }),
        clearUser: () => set({...initialUserStoreValues}),
      }),
      { 
        name: "loggedInUserInformation",
        storage: asyncStorage,
      }
    ))
);