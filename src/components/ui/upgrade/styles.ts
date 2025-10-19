import { StyleSheet } from "react-native";
import { colors } from "@theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.comment,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    height: 1,
    backgroundColor: colors.background,
    marginVertical: 8,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.foreground,
  },
  vps: {
    fontSize: 16,
    color: colors.green,
  },
  buyText: {
    fontSize: 14,
    color: colors.foreground,
    fontWeight: "condensed",
  },
  level: {
    fontSize: 14,
    color: colors.yellow,
    marginTop: 6,
    fontWeight: "600",
  },
  buy: {
    backgroundColor: colors.red,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buyDisabled: {
    backgroundColor: colors.selection,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
});