import { FlatList } from "react-native";
import UpgradeItem from "../item";

type UpgradeListProps = {
  upgrades: UpgradeItem[];
};

export default function UpgradeList({
  upgrades,
}: UpgradeListProps) {
  return (
    <FlatList
      data={upgrades}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <UpgradeItem
          item={item}
          canAfford={false}
          onActivate={() => console.log("ok")}
          onBuy={() => console.log("ok")}
        />
      )}
    />
  );
}
