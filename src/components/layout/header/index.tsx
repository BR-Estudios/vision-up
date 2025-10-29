import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "@theme/colors";
import { translation } from "@utils/locale";
import { formater } from "@utils/formater";
import { styles } from "./styles";
import { useGame } from "store/game";

export default function Header() {
  const { game } = useGame();

  return (
    <View style={styles.header}>
      <View style={styles.vpsContainer}>
        <Entypo
          name="eye"
          size={40}
          color={colors.comment}
        />

        <Text accessibilityLabel={translation("accessibilityLabel.header.vps", { vps: formater.format(game.vps) })} style={styles.vps}>
          {formater.format(game.vps)}
        </Text>
      </View>

    </View>
  )
}