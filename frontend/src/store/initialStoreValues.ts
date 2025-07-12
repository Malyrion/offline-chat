import type {OfflineAction,GroupMessages} from '../domain';

export const initialUserStoreValues = {
  userId: "",
  username: "",
};

export const initialGroupStoreValues = {
  openGroups:[],
  yourGroups:[],
}


export const initialQueueStoreValues = {
  actionQueue: [] as OfflineAction[],
};

export const initialChatStoreValues = {
  groupMessages: {} as Record<string, GroupMessages[]>
}
