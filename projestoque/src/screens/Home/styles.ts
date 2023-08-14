import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const Container = styled.View`
  height: ${height};
  width: ${width};
  flex: 1;
  background-color: #f69c1a;
`;

export const ViewText = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const ViewSemItem = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  padding-top: 50%;
`;
export const ViewBtsAdd = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
export const ViewTrash = styled.View`
  align-self: flex-end;
  position: absolute;
  width: 28;
  height: 28;
`;

export const VTextExame = styled.View`
  padding: 1%;
`;

export const ViewBts = styled.View`
  flex-direction: row;
  align-items: center;
  justify-self: center;
  padding: 1px;
  margin: 2px;
  justify-content: space-evenly;
`;

export const DataBt = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100px;
  height: 30px;
  border-color: gray;
  border-width: 1px;
  border-radius: 8px;
`;

export const StatusBt = styled.View`
  width: 100px;
  height: 30px;
  border-color: gray;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  margin-bottom: 1%;
  margin-top: 2%;
  background-color: #3abbe3;
`;

export const ViewArray = styled(Animatable.View).attrs({
  elevation: 1,
})`
  width: 95%;
  margin-top: 5px;
  margin-bottom: 3px;
  padding: 5%;
  align-self: center;
  border-color: #000;
  border-width: 1px;
  border: 1px;
  border-radius: 15px;
  background-color: #fff;
`;

export const ViewBarcode = styled.View`
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Texts = styled.Text`
  color: #000000;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-weight: bold;
`;
export const TextAr = styled.Text`
  color: #000000;
  justify-content: center;
  align-items: center;
  font-weight: 400;
`;
export const TextItem = styled.Text`
  color: #fff;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  align-self: center;
`;
export const BtTrash = styled.TouchableOpacity`
  width: 28;
  height: 28;
`;
