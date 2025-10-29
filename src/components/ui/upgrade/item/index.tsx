import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AccessibleButton } from '@components/ui/accessible-button';
import { useGame } from 'store/game';
import { useUpgrades } from 'store/upgrades';

export default function UpgradeItem({ item }: UpgradeItemProps) {
  const { game } = useGame();
  const { buy, incrementVps } = useUpgrades();

  const canAfford = game.vps >= item.costBase;

  const containerStyle = item.done
    ? styles.containerDone
    : !item.unlocked
    ? styles.containerDisabled
    : styles.container;

    // Botão principal do clicker — só clicável se estiver desbloqueado
  const accessibleButtonProps = {
    label: `Ícone do upgrade ${item.name}`,
    source: item.icon,
    hint: item.unlocked
      ? `Toque para ganhar VPs!`
      : `Bloqueado — compre para desbloquear.`,
    onPress: item.unlocked ? () => incrementVps(item.vps) : undefined,
    disabled: !item.unlocked,
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
              // ainda bloqueado (precisa comprar primeiro)
              !item.unlocked && (
                <TouchableOpacity
                  style={canAfford ? styles.buy : styles.buyDisabled}
                  onPress={() => buy(item.id)}
                  disabled={!canAfford}
                  activeOpacity={0.6}
                >
                  <Text style={styles.buyText}>
                    Custo: {item.costBase} VPs para desbloquear
                  </Text>
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
                onPress={() => buy(item.id)}
                disabled={!canAfford}
                activeOpacity={0.6}
              >
                <Text style={styles.buyText}>
                  Custo: {item.costBase} VPs
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
