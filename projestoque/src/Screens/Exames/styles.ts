import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ViewText = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const VTextExame = styled.View`
  padding: 1%;
`;

export const ViewArray = styled.View`
  width: 100%;
  padding: 3%;
  border-bottom-color: #000;
  border-width: 1px;
`;
export const ViewBarcode = styled.View`
  width: 100%;
  height: 10%;
  background-color: blue;
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
  //
`;
export const TextAr = styled.Text`
  color: #000000;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  //
`;
export const TextItem = styled.Text`
  color: #000000;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  align-self: center;
`;

export const ViewBts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 2%;
  margin-right: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const DataBt = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 110px;
  height: 30px;
  border-color: gray;
  border-width: 1px;
  border-radius: 8px;
  padding-right: 15px;
`;
export const StatusBt = styled.View`
  width: 140px;
  height: 30px;
  border-color: gray;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  padding-right: 15px;
  flex-direction: row;
`;
export const Scroll = styled.ScrollView`
  flex: 1;
`;
