import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'game';

const initialState: Game = {
  vps: 0,
  vpsOffline: 0,
  vision: 0,
};

export const useGame = create<GameStore>((set, get) => ({
  game: initialState,

  load: async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) set({ game: JSON.parse(data) });
  },

  save: async () => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(get().game));
  },

  update: (data) => {
    // console.log('Update called with data:', data);
    set((state) => ({
      game: { ...state.game, ...data },
    }));
  },

  reset: async () => {
    set({ game: initialState });
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialState));
  },
}));
