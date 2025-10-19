import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { bengala } from "@assets";
import { AccessibleButton } from "../accessible-button";

export default function Upgrade() {
  return (
    <View style={styles.container}>
      <AccessibleButton
        label="Ícone do upgrade Bengala"
        hint="Fornece +8 VPs"
        source={bengala}
      />

      <View style={styles.content}>
        <View style={styles.top}>
          <Text style={styles.name}>Bengala</Text>
          <Text style={styles.vps}>+8 VPs</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.bottom}>
          <Text style={styles.level}>Nível: 4/10</Text>

          <TouchableOpacity style={styles.buyDisabled} activeOpacity={0.6}>
            <Text style={styles.buyText}>Custo: 270 VPs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
