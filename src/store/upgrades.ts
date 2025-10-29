import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import { upgradesData } from '@data/upgrades';
import { translation } from '@utils/locale';
import { useGame } from './game';

type UpgradesStore = {
  upgrades: UpgradeItem[];
  load: () => Promise<void>;
  save: () => Promise<void>;
  buy: (id: number) => void;
  incrementVps: (vps: number) => void;
  setUpgrades: (u: UpgradeItem[]) => void;
};

const STORAGE_KEY = 'upgrades';

export const useUpgrades = create<UpgradesStore>((set, get) => ({
  upgrades: upgradesData,

  load: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (!data) return;

      const saved: UpgradeItem[] = JSON.parse(data);
      const merged = upgradesData.map((defaultUpgrade) => {
        const found = saved.find((u) => u.id === defaultUpgrade.id);
        return found ? { ...defaultUpgrade, ...found } : defaultUpgrade;
      });

      set({ upgrades: merged });
    } catch (e) {
      alert(`Erro ao carregar upgrades: ${e}`);
    }
  },

  save: async () => {
    try {
      const { upgrades } = get();
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(upgrades));
    } catch (e) {
      alert(`Erro ao salvar upgrades: ${e}`);
    }
  },

  setUpgrades: (u) => set({ upgrades: u }),

  buy: (id) => {
    const { upgrades } = get();
    const { game, update } = useGame.getState();

    const newUpgrades = [...upgrades];
    const upgrade = newUpgrades.find((u) => u.id === id);
    if (!upgrade) return;

    const gameState = { ...game };

    // Verifica se o jogador pode pagar
    if (gameState.vps < upgrade.costBase) {
      ToastAndroid.show(translation('alert.notEnoughVPs'), ToastAndroid.SHORT);
      return;
    }

    // Se já está desbloqueado → melhora o nível
    if (upgrade.unlocked) {
      gameState.vps -= upgrade.costBase;
      upgrade.currentLevel += 1;
      upgrade.costBase *= upgrade.costMultiplier;

      if (upgrade.currentLevel === upgrade.goal) {
        upgrade.goal += 10;
        upgrade.vpsMultiplier = 3;
        ToastAndroid.show(translation('alert.goal'), ToastAndroid.SHORT);
        // playEffect('doneGoal', require('../../assets/audios/goal.mp3'));
      } else {
        upgrade.vpsMultiplier = 2;
        ToastAndroid.show(translation('alert.upgradePurchased'), ToastAndroid.SHORT);
        // playEffect('buyUpgrade', require('../../assets/audios/buy.mp3'));
      }

      if (upgrade.currentLevel === 1000) {
        upgrade.done = true;
        ToastAndroid.show(
          translation('alert.maxLevel', { name: upgrade.name }),
          ToastAndroid.SHORT
        );
      }

      upgrade.vps *= upgrade.vpsMultiplier;
    } else {
      // Primeira compra (desbloqueio)
      upgrade.unlocked = true;
      gameState.vps -= upgrade.costBase;
      upgrade.costBase *= 5;
      ToastAndroid.show(translation('alert.upgradeUnlocked'), ToastAndroid.SHORT);
      // playEffect('buyUpgrade', require('../../assets/audios/buy.mp3'));
    }

    // Atualiza stores
    set({ upgrades: newUpgrades });
    update({ vps: gameState.vps });
    get().save();
  },

  incrementVps: (vps) => {
    const { game, update } = useGame.getState();
    update({ vps: game.vps + vps });
    // playEffect('click', require('../../assets/audios/pop.mp3'));
  },
}));
