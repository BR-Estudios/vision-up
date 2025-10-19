type UpgradeItemProps = {
  item: ItemProps;
  canAfford: boolean;
  onBuy: () => void;
  onActivate: () => void;
};

type UpgradeItem = {
  id: string | number;
  name: string;
  vps: number;
  costBase: number;
  costMultiplier: number;
  vpsMultiplier: number;
  currentLevel: number;
  goal: number;
  icon: ImageSourcePropType;
  unlocked: boolean;
  done: boolean;
};
