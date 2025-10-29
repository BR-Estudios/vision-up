import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "@components/layout/header";
import { StatusBar } from "expo-status-bar";
import Tabs from "@components/layout/tabs";
import UpgradeList from "@components/ui/upgrade/list";
import { upgradesData } from "data/upgrades";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <UpgradeList />
      <Tabs />
    </SafeAreaView>
  );
}

export { Home };
