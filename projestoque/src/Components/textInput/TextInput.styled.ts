import styled from 'styled-components/native';
import {IInput} from './Types';
import Icone from 'react-native-vector-icons/Ionicons';

export const Container = styled.View<IInput>`
  width: ${props => props.width || '90%'};
  height: ${props => props.heigth || 50}px;
  border-color: #8886;
  border-bottom-width: 2px;
  padding-left: 4px;
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  background-color: ${props => props.BgColor || 'transparent'};
  border-radius: ${props => props.radius || '0'};
  padding-left: ${props => props.padL || '0'};
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  font-weight: 400;
  flex: 1;
  color: #333;
  padding-left: 12px;
`;

export const Icon = styled(Icone).attrs(props => ({
  name: props.name || 'person-sharp',
}))`
  font-size: 22px;
  color: rgba(20, 20, 20, 0.6);
`;

export const TouchArea = styled.TouchableOpacity`
  width: 14%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
