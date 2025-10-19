type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

type Tab = {
  name: string;
  icon: IconName;
  label: string;
};