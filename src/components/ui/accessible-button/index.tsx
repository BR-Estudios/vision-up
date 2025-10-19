import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";

export function AccessibleButton({
  source,
  label,
  hint,
  onPress,
}: AccessibleButtonProps) {
  return (
    <TouchableOpacity
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityRole="button"
      activeOpacity={0.6}
      style={styles.iconContainer}
      onPress={onPress}
    >
      <Image source={source} style={styles.icon} contentFit="contain" />
    </TouchableOpacity>
  );
}
