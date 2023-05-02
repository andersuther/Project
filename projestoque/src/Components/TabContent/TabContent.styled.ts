import styled from 'styled-components/native';

export const ContainerTab = styled.View`
  height: 190px;
  width: 98%;
  justify-content: center;
  align-self: center;
`;

export const TabView = styled.View`
  width: 90%;
  height: 115%;
  background-color: #fff;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: -1px;
  align-self: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  width: 90%;
  height: 30%;
`;

export const TabButon = styled.TouchableOpacity<IBasic>`
  width: 40%;
  border-top-right-radius: 15px;
  margin-right: 1%;
  border-top-left-radius: 15px;
  background-color: ${(props) => props.color || '#fff'};
  justify-content: center;
  align-items: center;
`;

export const CustomText = styled.Text<IBasic>`
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => props.weight || 700};
  right: 5%;
  color: ${(props) => props.color || '#333'};
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
  width: 85%;
  height: 65%;
  align-items: center;
`;
