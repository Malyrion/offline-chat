import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { initialGroupStoreValues } from './initialStoreValues';
import { asyncStorage } from './asyncStorage';

export type Group = {
  groupId: string;
  groupName: string;
  members: string[];
  createdBy: string;
};

export type GroupStore = {
  openGroups: Group[];
  yourGroups: Group[];
  setOpenGroups: (groups: Group[]) => void;
  setYourGroups: (groups: Group[]) => void;
  clearGroups: () => void;
};

export const useGroupStore = create<GroupStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialGroupStoreValues,
        setOpenGroups: (groups) => set({ openGroups: groups }),
        setYourGroups: (groups) => set({ yourGroups: groups }),
        clearGroups: () => set({ ...initialGroupStoreValues }),
      }),
      {
        name: 'groupStore',
        storage: asyncStorage,
      }
    )
  )
);
