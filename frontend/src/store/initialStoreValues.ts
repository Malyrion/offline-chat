import type {OfflineAction} from '../domain';

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