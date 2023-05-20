import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import * as Styled from './styles';

// import { Container } from './styles';
const Dashboard: React.FC = () => {
  const img9 = '../../images/tttt.png';

  const meuArray = [
    {
      id: '1',
      nome: 'Akira Teste',
      data: '01/02/2023',
      tutor: 'Rodrigo Teste',
      complemento: 'Titulação de Anticorpos',
    },
    {
      id: '2',
      nome: 'Bela',
      data: '01/02/2023',
      tutor: 'Camila Franzini',
      complemento: 'Titulação de Andicorpos',
    },
    {
      id: '3',
      nome: 'Joana',
      data: '01/02/2023',
      tutor: 'Camila Volsi',
      complemento: 'Sorologia de Raiva',
    },
    {
      id: '4',
      nome: 'Pedro',
      data: '01/02/2023',
      tutor: 'Camila Volsi',
      complemento: 'Laranja',
    },
    {
      id: '5',
      nome: 'Pedro',
      data: '01/02/2023',
      tutor: 'Camila Volsi',
      complemento: 'Lindo',
    },
    {
      id: '6',
      nome: 'Pedro',
      data: '01/02/2023',
      tutor: 'Camila Volsi',
      complemento: 'ROSA',
    },
  ];

  const t = meuArray.filter(arr => arr.id == '4');
  console.log(t.length);

  return (
    <Styled.Container>
      <Styled.VTextExame>
        <Styled.TextExame>Exames</Styled.TextExame>
      </Styled.VTextExame>

      <Styled.ViewBts>
        <Styled.DataBt>
          <Text>Data</Text>
        </Styled.DataBt>
        <Styled.StatusBt>
          <Text>Status</Text>
        </Styled.StatusBt>
      </Styled.ViewBts>

      <Styled.Scroll>
        <View>
          {meuArray.map(fruta => (
            <>
              <Styled.ViewArray>
                <Styled.Texts>
                  ID:<Styled.TextAr> {fruta?.id}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Nome:<Styled.TextAr> {fruta?.nome}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Tutor:<Styled.TextAr> {fruta?.tutor}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Compplemento:
                  <Styled.TextAr> {fruta?.complemento}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Data: <Styled.TextAr> {fruta?.data}</Styled.TextAr>
                </Styled.Texts>
              </Styled.ViewArray>
            </>
          ))}
        </View>
      </Styled.Scroll>

      <Styled.ViewBarcode>
        <Image
          source={require(img9)}
          style={{width: '102%', height: '121%', marginBottom: '2%'}}
        />
      </Styled.ViewBarcode>
    </Styled.Container>
  );
};

export default Dashboard;
