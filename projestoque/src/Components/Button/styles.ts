import styled from 'styled-components/native';

export const Botao = styled.TouchableOpacity`
background-color: ${(props) => props.bgColor || '#f15'};
border-radius: 40px;
width: 80%;
height: 40px;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
/* margin:1px; */
`;

export const ViewBotao = styled.View`
justify-content: center;
align-items: center;
width: 100%;
/* height: 20%; */
`;

export const TxtButton = styled.Text`
font-size: 20px;
color: #fff;
align-items: center;
margin-top: 3px;
`