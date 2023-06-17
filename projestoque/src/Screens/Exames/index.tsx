import React, {useState} from 'react';
import {LogBox} from 'react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import * as Styled from './styles';
import RadioIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Modal} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import DatePicker from 'react-native-date-picker';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

const Dashboard: React.FC = () => {
  const img9 = '../../images/tttt.png';
  const [modalVisible, setModalVisible] = useState(false);

  const meuArray = [
    {
      id: 1,
      nome: 'João',
      data: '01/01/2023',
      tutor: 'Maria',
      complemento: 'Tosa',
    },
    {
      id: 2,
      nome: 'Ana',
      data: '05/02/2023',
      tutor: 'Carlos',
      complemento: 'Vacinação pendente',
    },
    {
      id: 3,
      nome: 'Pedro',
      data: '15/03/2023',
      tutor: 'Mariana',
      complemento: 'Alergia a ração de frango',
    },
    {
      id: 4,
      nome: 'Mariana',
      data: '10/04/2023',
      tutor: 'Fernando',
      complemento: 'Nenhum',
    },
    {
      id: 5,
      nome: 'Carlos',
      data: '20/05/2023',
      tutor: 'Patrícia',
      complemento: 'Precisa de escovação diária',
    },
    {
      id: 6,
      nome: 'Paula',
      data: '07/06/2023',
      tutor: 'Ricardo',
      complemento: 'Alergia a pulgas',
    },
    {
      id: 7,
      nome: 'Lúcia',
      data: '25/06/2023',
      tutor: 'Fernanda',
      complemento: 'Precisa de medicamento diário',
    },
    {
      id: 8,
      nome: 'Gustavo',
      data: '12/07/2023',
      tutor: 'Luiz',
      complemento: 'Castrado',
    },
    {
      id: 9,
      nome: 'Fernando',
      data: '18/08/2023',
      tutor: 'Amanda',
      complemento: 'Nenhum',
    },
    {
      id: 10,
      nome: 'Juliana',
      data: '05/09/2023',
      tutor: 'Rafael',
      complemento: 'Precisa de banho semanal',
    },
    {
      id: 11,
      nome: 'Lucas',
      data: '22/10/2023',
      tutor: 'Paula',
      complemento: 'Alergia a pólen',
    },
  ];

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  //const t = meuArray.filter(arr => arr.id == '4');
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
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Icon name="calendar" size={19} color="#000" />
          </TouchableOpacity>
          <DatePicker
            modal
            minimumDate={new Date('2009-01-31')}
            maximumDate={new Date('2050-12-31')}
            mode="date"
            theme="auto"
            title={'Exames por data'}
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Text>Data</Text>
        </Styled.DataBt>

        <Styled.StatusBt>
          <Text>Status</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="caret-down" size={19} color="#000" />
          </TouchableOpacity>
          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
            <View
              style={{
                height: '90%',
                width: '85%',
                backgroundColor: '#be2',
                borderRadius: 2,
                alignSelf: 'flex-start',
                alignItems: 'flex-end',
                paddingRight: '2%',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <RadioIcon name="close" size={25} color={'#000'} />
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
