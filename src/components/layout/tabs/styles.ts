import { StyleSheet } from "react-native";
import { colors } from "@theme/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listTabs: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTab: {
    color: colors.foreground,
    fontSize: 14,
    textAlign: "center",
  },
});