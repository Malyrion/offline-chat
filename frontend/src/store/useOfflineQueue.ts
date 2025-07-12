import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { asyncStorage } from './asyncStorage';
import { initialQueueStoreValues } from './initialStoreValues';
import type {OfflineAction} from '../domain';

export type QueueStore = {
  actionQueue: OfflineAction[];
  addAction: (action: OfflineAction) => void;
  removeAction: (actionId: string) => void;
  clearQueue: () => void;
};

export const useQueueStore = create<QueueStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialQueueStoreValues,
        addAction: (action) =>
          set({ actionQueue: [...get().actionQueue, action] }),
        removeAction: (actionId) =>
          set({
            actionQueue: get().actionQueue.filter((a) => a.id !== actionId),
          }),
        clearQueue: () => set({ ...initialQueueStoreValues }),
      }),
      {
        name: 'offlineActionQueue',
        storage: asyncStorage,
      }
    )
  )
);
