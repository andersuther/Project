import { StyleProp, ViewStyle } from 'react-native';

enum IconType {
  MaterialIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
}

export interface ColorStyleProps {
  customColor?: boolean;
  disabled?: boolean;
  inverted?: boolean;
  secondary?: boolean;
  transparent?: boolean;
  colorText?: string;
}

export interface ContainerProps extends ColorStyleProps {
  width?: string;
  rounded?: boolean;
  roundness?: string;
  spaceFill?: boolean;
  bottoned?: boolean;
  topped?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface ButtonContainerProps extends ColorStyleProps {
  rounded?: boolean;
}

export type ActivityIndicatorProps = Pick<
  ColorStyleProps,
  'transparent' | 'inverted' | 'secondary'
>;

export interface ButtonProps extends ContainerProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  iconName?: string;
  iconType?: keyof typeof IconType;
  roundness?: string;
  textSize?: number;
  weight?: string;
}
