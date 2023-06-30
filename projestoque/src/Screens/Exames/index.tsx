import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import * as Styled from './styles';
import RadioIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Modal} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

const Dashboard: React.FC = () => {
  const img9 = '../../images/tttt.png';
  const [modalVisible, setModalVisible] = useState(false);
  const [useList, setUseList] = useState<any>([]);

  const meuArray = [
    {
      id: 1,
      nome: 'João',
      data: '01-01-2023',
      valor: 'R$ 10,00',
      complemento: 'Tosa',
    },
    {
      id: 2,
      nome: 'Ana',
      data: '05-02-2023',
      valor: 'R$ 10,00',
      complemento: 'Vacinação pendente',
    },
    {
      id: 3,
      nome: 'Pedro',
      data: '15-03-2023',
      valor: 'R$ 10,00',
      complemento: 'Alergia a ração de frango',
    },
    {
      id: 4,
      nome: 'Mariana',
      data: '10-04-2023',
      valor: 'R$ 10,00',
      complemento: 'Nenhum',
    },
    {
      id: 5,
      nome: 'Carlos',
      data: '20-05-2022',
      valor: 'R$ 10,00',
      complemento: 'Precisa de escovação diária',
    },
    {
      id: 6,
      nome: 'Paula',
      data: '07-06-2024',
      valor: 'R$ 10,00',
      complemento: 'Alergia a pulgas',
    },
    {
      id: 7,
      nome: 'Lúcia',
      data: '25-06-2023',
      valor: 'R$ 10,00',
      complemento: 'Precisa de medicamento diário',
    },
    {
      id: 8,
      nome: 'Gustavo',
      data: '05-09-2023',
      valor: 'R$ 10,00',
      complemento: 'Castrado',
    },
    {
      id: 9,
      nome: 'Fernando',
      data: '18-08-2023',
      valor: 'R$ 10,00',
      complemento: 'Nenhum',
    },
    {
      id: 10,
      nome: 'Juliana',
      data: '05-09-2023',
      valor: 'R$ 10,00',
      complemento: 'Precisa de banho semanal',
    },
    {
      id: 11,
      nome: 'Lucas',
      data: '05-09-2023',
      valor: 'R$ 10,00',
      complemento: 'Alergia a pólen',
    },
  ];

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUseList(meuArray);
  }, []);

  const filterList = data => {
    const novaData = moment(data).format('DD-MM-YYYY');
    const Arrayfiltrado = meuArray.filter(item => item.data === novaData);
    setUseList(Arrayfiltrado);
    if (Arrayfiltrado.length < 1) {
      console.tron.log('abre modal');
    }
    console.tron.log('teste de log', Arrayfiltrado);
  };

  const clearFilter = () => {
    setUseList(meuArray);
    console.tron.log('clear');
    console.tron.log('fecha a modal');
  };

  // const datalll = "28-04-2023"
  // const cortaData = datalll.slice(-4)
  // console.tron.log("data cortada", cortaData);

  return (
    <Styled.Container>
      <Styled.VTextExame>
        <Styled.TextItem>Itens</Styled.TextItem>
      </Styled.VTextExame>

      <Styled.ViewBts>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Styled.DataBt>
            <Icon name="calendar" size={20} color="#000" />

            <DatePicker
              modal
              minimumDate={new Date('2000-01-31')}
              maximumDate={new Date('2050-12-31')}
              mode="date"
              title={'Itens por data'}
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
                filterList(date);
              }}
              onCancel={() => {
                setOpen(false);
                clearFilter();
              }}
            />
            <Text>Data</Text>
          </Styled.DataBt>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Styled.StatusBt>
            <Text>Status</Text>
            <Icon name="caret-down" size={19} color="#000" />

            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
              <View
                style={{
                  height: '50%',
                  width: '70%',
                  backgroundColor: '#be2',
                  borderRadius: 2,
                  alignSelf: 'center',
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
        </TouchableOpacity>
      </Styled.ViewBts>

      <Styled.Scroll>
        <View>
          {useList.map(item => (
            <>
              <Styled.ViewArray>
                <Styled.Texts>
                  ID:<Styled.TextAr> {item?.id}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Nome:<Styled.TextAr> {item?.nome}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Valor:<Styled.TextAr> {item?.valor}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Complemento:
                  <Styled.TextAr> {item?.complemento}</Styled.TextAr>
                </Styled.Texts>
                <Styled.Texts>
                  Data: <Styled.TextAr> {item?.data}</Styled.TextAr>
                </Styled.Texts>
              </Styled.ViewArray>
            </>
          ))}
        </View>
      </Styled.Scroll>
    </Styled.Container>
  );
};

export default Dashboard;
