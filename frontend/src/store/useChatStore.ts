import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { initialChatStoreValues } from './initialStoreValues';
import { asyncStorage } from './asyncStorage';
import type { GroupMessages } from '../domain';

export type ChatStore = {
  groupMessages: Record<string, GroupMessages[]>;
  currentGroupId: string;
  setCurrentGroupId: (groupId: string) => void;
  addMessage: (groupId: string, message: GroupMessages) => void;
  setMessages: (groupId: string, messages: GroupMessages[]) => void;
  clearChat: () => void;
};

export const useChatStore = create<ChatStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialChatStoreValues,
        currentGroupId: "",
        setCurrentGroupId: (groupId) => set({ currentGroupId: groupId }),
        addMessage: (groupId, message) => {
          const prev = get().groupMessages[groupId] || [];
          set({
            groupMessages: {
              ...get().groupMessages,
              [groupId]: [...prev, message],
            },
          });
        },
        setMessages: (groupId, messages) => {
          set({
            groupMessages: {
              ...get().groupMessages,
              [groupId]: messages,
            },
          });
        },
        clearChat: () => set({ ...initialChatStoreValues, currentGroupId: "" }),
      }),
      {
        name: "chatStore",
        storage: asyncStorage,
      }
    )
  )
);