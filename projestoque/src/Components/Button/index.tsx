import React, {useState} from 'react';
import {Text} from 'react-native';
import * as Styled from './styles';
interface Types {
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
}

export const BotaoHome: React.FC<Types> = ({
  title,
  color,
  onPress,
  height,
  width,
  pd,
  Flexdir,
  navigate,
  Iconame,
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
        pd={pd}>
        {Iconame && <Styled.Icon name={'logo-google'} />}
        <Styled.TxtButton>{title}</Styled.TxtButton>
      </Styled.Botao>
    </Styled.ViewBotao>
  );
};
