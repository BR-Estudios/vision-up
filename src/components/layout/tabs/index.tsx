import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { tabs } from "data/tabs";
import { translation } from "@utils/locale";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@theme/colors";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listTabs}
        data={tabs}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            accessibilityHint={translation("accessibilityHint.openTab", {
              tab: item.label,
            })}
            accessibilityRole="button"
            style={styles.tab}
            activeOpacity={0.6}
            onPress={() => console.log(`Open ${item.name} tab`)}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={40}
              color={colors.cyan}
            />
            <Text style={styles.titleTab}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
