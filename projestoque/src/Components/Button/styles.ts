import styled from 'styled-components/native';
import Icone from 'react-native-vector-icons/Ionicons';

export const Botao = styled.TouchableOpacity`
  background-color: ${props => props.bgColor || '#FFF'};
  border-radius: ${props => props.radius || '40px'};
  width: 80%;
  height: ${props => props.height || '35px'};
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  margin: 5px;
  flex-direction: ${props => props.Flexdir || 'column'};
  padding: ${props => props.pd || '5px'};
`;

export const ViewBotao = styled.View`
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '100%'};
  justify-items: center;

  justify-content: center;
  align-items: center;
`;

export const TxtButton = styled.Text`
  font-size: ${props => props.texto || '20px'};
  color: ${props => props.color || '#fff'};
`;

export const Icon = styled(Icone).attrs(props => ({
  name: props.name || 'logo-google',
}))`
  font-size: 20px;
  color: #fff;
  padding-right: 10px;
  position: absolute;
  left: 10%;
`;
