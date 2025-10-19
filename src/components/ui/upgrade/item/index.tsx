import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AccessibleButton } from "@components/ui/accessible-button";

export default function UpgradeItem({
  item,
  canAfford,
  onBuy,
  onActivate,
}: UpgradeItemProps) {
  const containerStyle = item.done
    ? styles.containerDone
    : !item.unlocked
    ? styles.containerDisabled
    : styles.container;

  // Desativa o botão para upgrades bloqueados ou concluídos, e mantém ativo nos demais
  const accessibleButtonProps = {
    label: `Ícone do upgrade ${item.name}`,
    source: item.icon,
    ...(item.done || !item.unlocked
      ? { disabled: true }
      : { hint: `Fornece +${item.vps} VPs`, onPress: onActivate }),
  };

  return (
    <View style={containerStyle}>
      <AccessibleButton {...accessibleButtonProps} />

      <View style={styles.content}>
        {item.done || !item.unlocked ? (
          <>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.divider} />

            {item.done ? (
              <Text style={styles.level}>Nível Máximo</Text>
            ) : (
              !item.unlocked && (
                <TouchableOpacity
                  style={canAfford ? styles.buy : styles.buyDisabled}
                  onPress={onBuy}
                  disabled={!canAfford}
                  activeOpacity={0.6}
                >
                  <Text style={styles.buyText}>Custo: {item.costBase} VPs para desbloquear</Text>
                </TouchableOpacity>
              )
            )}
          </>
        ) : (
          <>
            <View style={styles.top}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.vps}>+{item.vps} VPs</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.bottom}>
              <Text style={styles.level}>
                Nível: {item.currentLevel}/{item.goal}
              </Text>

              <TouchableOpacity
                style={canAfford ? styles.buy : styles.buyDisabled}
                onPress={onBuy}
                disabled={!canAfford}
                activeOpacity={0.6}
              >
                <Text style={styles.buyText}>Custo: {item.costBase} VPs</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
