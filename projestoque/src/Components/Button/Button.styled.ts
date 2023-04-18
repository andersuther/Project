import styled from 'styled-components/native';
import { Icon as NBIcon } from 'native-base';
import { css } from 'styled-components/native';
import { TouchableRipple } from 'react-native-paper';

import { defaultFont } from '../../theme';
import {
  ActivityIndicatorProps,
  ButtonContainerProps,
  ColorStyleProps,
  ContainerProps,
} from './Button.types';
import { TouchableOpacity } from 'react-native';

const buttonColorStyle = css<ColorStyleProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  ${(props) =>
    props.secondary && `background-color: ${props.theme.colors.secondary};`}
  ${(props) => props.customColor && `background-color: ${props.customColor};`}
  ${(props) =>
    props.inverted && `background-color: ${props.theme.colors.primaryText};`}
  ${(props) =>
    props.inverted &&
    props.secondary &&
    `background-color: ${props.theme.colors.secondaryText};`}

  ${(props) => props.transparent && `background-color: transparent;`}

  ${(props) =>
    props.disabled &&
    !props.transparent &&
    !props.inverted &&
    `background-color: ${props.theme.colors.disabled};`}
    
  ${(props) =>
    props.disabled &&
    props.secondary &&
    !props.transparent &&
    !props.inverted &&
    `background-color: ${props.theme.colors.secondaryDisabled};`}
`;

const textColorStyle = css<ColorStyleProps>`
  color: ${({ theme, colorText }) => colorText || theme.colors.primaryText};
  ${(props) => props.secondary && `color: ${props.theme.colors.secondaryText}`}
  ${(props) => props.transparent && `color: ${props.theme.colors.primary}`}
  ${(props) => props.inverted && `color: ${props.theme.colors.primary};`}
  ${(props) =>
    props.transparent &&
    props.secondary &&
    `color: ${props.theme.colors.secondary}`}
  ${(props) =>
    props.inverted &&
    props.secondary &&
    `color: ${props.theme.colors.secondary};`}
  ${(props) =>
    props.inverted && props.customColor && `color: ${props.customColor};`}
  ${(props) =>
    props.transparent && props.customColor && `color: ${props.customColor};`}
  ${(props) =>
    props.disabled &&
    (props.inverted || props.transparent) &&
    `color: ${props.theme.colors.disabled};`}
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View<ContainerProps>`
  width: ${(props) => props.width || '100%'};
  border-radius: 6px;
  border-width: 0.6px;
  border-color: ${(props) => props.theme.colors.primary};
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => props.bottoned && `margin-bottom: 30px;`}
  ${(props) => props.disabled && `opacity: 0.8;`}
  ${(props) => props.spaceFill && `margin-top: auto;`}
  ${(props) =>
    props.rounded ? `border-radius: ${props.theme.metrics.roundness};` : ``}
   ${(props) => props.transparent && `border-width: 0px;`}

  ${(props) =>
    props.secondary && `border-color: ${props.theme.colors.secondary};`}
  ${(props) => props.transparent && `border-color: transparent;`}
  ${(props) => props.inverted && `border-color: ${props.theme.colors.primary};`}
  ${(props) =>
    props.inverted &&
    props.secondary &&
    `border-color: ${props.theme.colors.secondary};`}
  ${(props) => props.customColor && `border-color: ${props.customColor};`}
  ${(props) =>
    props.disabled && `border-color: ${props.theme.colors.inputBackground};`}
  ${buttonColorStyle};
`;

export const ButtonContainer = styled(TouchableRipple).attrs((props) => ({
  borderless: true,
  rippleColor: props.theme.colors.rippleColor,
  underlayColor: props.theme.colors.rippleColor,
}))<ButtonContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${(props) =>
    props.rounded && `border-radius: ${props.theme.metrics.roundness};`}
`;

export const ButtonContainerComprovante = styled(TouchableOpacity).attrs(
  (props) => ({
    borderless: true,
    rippleColor: props.theme.colors.rippleColor,
    underlayColor: props.theme.colors.rippleColor,
  }),
)<ButtonContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${(props) =>
    props.rounded && `border-radius: ${props.theme.metrics.roundness};`}
`;

export const ButtonText = styled.Text`
  ${defaultFont(500)}
  text-align: center;
  font-size: 14px;
  ${textColorStyle}
`;

export const Icon = styled(NBIcon).attrs((props) => ({
  type: props.type || 'MaterialIcons',
}))`
  font-size: 18px;
  padding-right: 15px;
  ${textColorStyle}
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs<ActivityIndicatorProps>(
  (props) => ({
    color: props.theme.colors.primaryText,
    ...(props.inverted && { color: props.theme.colors.disabled }),
    ...(props.secondary && { color: props.theme.colors.secondaryText }),
    ...(props.transparent && { color: 'transparent' }),
  }),
)<ActivityIndicatorProps>`
  padding-right: 0px;
`;
export const Title = styled.Text`
  font-size: ${(props) => props.textSize || 16};
  font-weight: ${(props) => props.weight || '400'};
`;
