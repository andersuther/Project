import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ViewTexts = styled.View`
  /* background-color: yellow; */
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TextWel = styled.Text`
  color: #fff;
  /* background-color:red; */
  justify-content: center;
  align-items: center;
  /* height: 10%; */
  font-weight: 400;
  font-size: 40px;
`;

export const TextSub = styled.Text`
  color: #000000;
  justify-content: center;
  align-items: center;
  margin: 5%;
  height: 25%;
  font-weight: 300;
  font-size: 15px;
  padding: 10px;
  /* background-color:red; */
`;

export const ViewInput = styled.View`
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 20%;
  padding: 2px;
`;

export const Input = styled.TextInput`
  align-items: center;
  margin: 5px;
  width: 80%;
  height: 35px;
  border-width: 1px;
  /* justify-content: center; */
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  border-radius: 25px;
  padding: 2px;
  color: #000;
  /* margin: 2%; */
`;
