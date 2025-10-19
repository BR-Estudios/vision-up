import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "@components/layout/header";
import { StatusBar } from "expo-status-bar";
import Upgrade from "@components/ui/upgrade";
import Tabs from "@components/layout/tabs";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Upgrade />
      <Tabs />
    </SafeAreaView>
  );
}

export { Home };
