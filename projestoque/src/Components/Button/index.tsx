import React from 'react';
import {Text} from 'react-native';
import * as Style from './styles';

interface Types{
  title?: string;
  color?: string;
  onPress?: () => void;
  navigate: (screen: string) => string;
}

export const BotaoHome: React.FC<Types> = ({
  title,
  color,
  onPress,
}) => {
  return (
    <Style.ViewBotao>
    <Style.Botao 
      bgColor={color}
      onPress={onPress}>
        <Style.TxtButton>
          {title}
        </Style.TxtButton>
      </Style.Botao>
        </Style.ViewBotao>
   
  )
}