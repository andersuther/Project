import React, {useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import * as Styled from './styles';
import {Spinner} from 'native-base';
interface Types {
  texto?: string;
  title?: string;
  color?: string;
  height?: string;
  width?: string;
  bgColor?: string;
  onPress?: () => void;
  navigate?: (screen: string) => string;
  Iconame?: boolean;
  Flexdir?: string;
  pd?: string;
  isLoading?: boolean;
  radius?: string;
}

export const BotaoHome: React.FC<Types> = ({
  title,
  color,
  radius,
  onPress,
  height,
  width,
  pd,
  Flexdir,
  navigate,
  texto,
  Iconame,
  isLoading,
}) => {
  const [secure, setSecure] = useState(false);
  return (
    <Styled.ViewBotao width={width}>
      <Styled.Botao
        Flexdir={Flexdir}
        bgColor={color}
        onPress={onPress}
        height={height}
        width={width}
        title={title}
        radius={radius}
        pd={pd}>
        {!isLoading && Iconame && <Styled.Icon name={'logo-google'} />}
        {isLoading ? (
          <Spinner color={'cyan.500'} />
        ) : (
          <Styled.TxtButton texto={texto}>{title}</Styled.TxtButton>
        )}
      </Styled.Botao>
    </Styled.ViewBotao>
  );
};
