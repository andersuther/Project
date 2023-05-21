import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import * as Styled from './styles';
import RadioIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Modal} from 'native-base';

const Dashboard: React.FC = () => {
  const img9 = '../../images/tttt.png';
  const [modalVisible, setModalVisible] = useState(false);

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
  const tamanho = 350;
  const tamanhoIcon = 90;
  const tamanhoPorcent = (tamanhoIcon * tamanho) / 100;

  return (
    <Styled.Container>
      <Styled.VTextExame>
        <Styled.TextExame>Exames</Styled.TextExame>
      </Styled.VTextExame>

      <Styled.ViewBts>
        <Styled.DataBt>
          <Text>Data</Text>
        </Styled.DataBt>
        <Styled.StatusBt onPress={() => setModalVisible(true)}>
          <Text>Status</Text>
          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
            <View
              style={{
                height: '90%',
                width: '85%',
                backgroundColor: '#81a1a7',
                borderRadius: 2,
                alignSelf: 'flex-start',
                alignItems: 'flex-end',
                paddingRight: '2%',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  width: tamanho,
                  height: tamanho,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#030303',
                    width: '52%',
                    height: '40%',
                    zIndex: -2,
                    borderRadius: tamanho,
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#9e1616',
                    width: '10%',
                    height: '10%',
                    zIndex: -1,
                    right: '58%',
                    top: '50%',
                    borderRadius: tamanho,
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    width: '17%',
                    height: '19%',
                    zIndex: -2,
                    right: '55%',
                    top: '45%',
                    borderRadius: tamanho,
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#9e1616',
                    width: '10%',
                    height: '10%',
                    zIndex: -1,
                    left: '58%',
                    top: '50%',
                    borderRadius: tamanho,
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    width: '17%',
                    height: '19%',
                    zIndex: -2,
                    left: '55%',
                    top: '45%',
                    borderRadius: tamanho,
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#fdf3f3',
                    width: '20%',
                    height: '10%',
                    zIndex: -1,
                    left: '40%',
                    bottom: '20%',
                    borderRadius: tamanho,
                  }}></View>
                <RadioIcon
                  name="alien"
                  size={tamanhoPorcent}
                  color={'#3dd41e'}
                />
              </TouchableOpacity>
            </View>
          </Modal>
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
