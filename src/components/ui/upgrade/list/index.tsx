import { FlatList } from 'react-native';
import UpgradeItem from '../item';
import { useGame } from 'store/game';
import { useUpgrades } from 'store/upgrades';

export default function UpgradeList() {
  const { game } = useGame();
  const { upgrades, buy, incrementVps } = useUpgrades();

  return (
    <FlatList
      data={upgrades}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <UpgradeItem
          item={item}
          canAfford={game.vps >= item.costBase}
          onActivate={() => incrementVps(item.vps)}
          onBuy={() => buy(Number(item.id))}
        />
      )}
    />
  );
}
