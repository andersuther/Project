import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  ButtonContainer,
  ButtonText,
  Icon,
  ActivityIndicator,
  ContentContainer,
  Container,
  Title,
} from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  title,
  iconName,
  iconType,
  onPress,
  inverted,
  disabled,
  transparent,
  customColor,
  width,
  rounded,
  loading,
  style,
  secondary,
  spaceFill,
  bottoned,
  topped,
  colorText,
  textSize,
  weight,
}) => {
  const {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    ...styleNoPadding
  } = style?.[0] || {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 12,
    paddingRight: 12,
  };

  const styleOnlyPadding = {
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  };

  return (
    <TouchableWithoutFeedback
      style={{ marginTop: topped ? 15 : 0, width: width }}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Container
        style={styleNoPadding}
        bottoned={bottoned}
        rounded={rounded}
        transparent={transparent}
        disabled={disabled || loading}
        inverted={inverted}
        customColor={customColor}
        width={width}
        secondary={secondary}
        spaceFill={spaceFill}
      >
        <>
          {loading ? (
            <ActivityIndicator
              transparent={transparent}
              inverted={inverted}
              secondary={secondary}
            />
          ) : (
            <></>
          )}
          <ButtonContainer style={styleOnlyPadding} rounded={rounded}>
            <ContentContainer>
              {iconName && (
                <Icon
                  secondary={secondary}
                  name={iconName}
                  type={iconType}
                  inverted={inverted}
                  transparent={transparent}
                  customColor={customColor}
                />
              )}
              <ButtonText
                secondary={secondary}
                customColor={customColor}
                colorText={colorText}
                transparent={transparent}
                inverted={inverted}
                disabled={disabled || loading}
              >
                <Title textSize={textSize} weight={weight}>
                  {title}
                </Title>
              </ButtonText>
            </ContentContainer>
          </ButtonContainer>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Button.defaultProps = {
  iconType: 'MaterialIcons',
  inverted: false,
  disabled: false,
  transparent: false,
  customColor: false,
  width: '100%',
  rounded: false,
  loading: false,
  secondary: false,
  spaceFill: false,
  bottoned: false,
  topped: false,
};
