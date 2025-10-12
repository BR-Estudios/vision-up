import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  info: {
    color: colors.foreground,
    fontSize: 20,
  },
  vpsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  vps: {
    color: colors.foreground,
    fontSize: 40,
  },
});
