import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "@theme/colors";
import { translation } from "@utils/locale";
import { formater } from "@utils/formater";
import { styles } from "./styles";

export default function Header() {
  // const { game, setGame } = useGame();

  return (
    <View style={styles.header}>
      <View style={styles.vpsContainer}>
        <Entypo
          name="eye"
          size={40}
          color={colors.comment}
        />

        <Text accessibilityLabel={translation("accessibilityLabel.header.vps", { vps: formater.format(0) })} style={styles.vps}>
          {formater.format(0)}
        </Text>
      </View>

    </View>
  )
}