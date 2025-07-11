import { createJSONStorage } from 'zustand/middleware';
import { createStore, get, set, del } from 'idb-keyval';

export const zustandStore = createStore('zustand-db', 'zustand-store');

export const asyncStorage = createJSONStorage(() => ({
  getItem: (name) => get(name, zustandStore).then((value) => value === undefined ? null : value),
  setItem: (name, value) => set(name, value, zustandStore),
  removeItem: (name) => del(name, zustandStore),
}));