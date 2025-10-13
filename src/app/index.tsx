import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "@components/layout/header";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

export { Home };
