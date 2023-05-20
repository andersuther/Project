import styled from 'styled-components/native';

export const ContainerTab = styled.View`
  height: 195px;
  width: 100%;
  justify-content: center;
  align-self: center;
`;

export const TabView = styled.View`
  width: 90%;
  height: 100%;
  background-color: #fff;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  align-self: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  width: 90%;
  height: 30%;
`;

export const TabButon = styled.TouchableOpacity<any>`
  width: 38%;
  border-top-right-radius: 15px;
  margin-right: 1%;
  border-top-left-radius: 15px;
  background-color: ${props => props.color || '#fff'};
  justify-content: center;
  align-items: center;
`;

export const CustomText = styled.Text<any>`
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 700};
  right: 5%;
  color: ${props => props.color || '#333'};
`;

export const TabContent = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

export const ContainerForget = styled.View`
  justify-content: space-around;
  width: 100%;
  top: 11%;
  flex-direction: row;
  padding-left: 2%;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 85%;
  align-items: center;
  /* background-color: blue; */
  margin-bottom: 50px;
`;
