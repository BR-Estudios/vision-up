type AccessibleButtonProps = {
  source: ImageSource;
  label: string;
  hint?: string;
  onPress?: TouchableOpacityProps["onPress"];
  disabled?: boolean;
};