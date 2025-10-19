import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "@components/layout/header";
import { StatusBar } from "expo-status-bar";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
    </SafeAreaView>
  );
}

export { Home };
