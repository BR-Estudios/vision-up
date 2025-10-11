import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { styles } from "./styles";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Vision Up</Text>
    </SafeAreaView>
  );
}

export { Home };
