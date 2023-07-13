import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import RadioIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Input, Modal} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import DatePicker from 'react-native-date-picker';
import {TextInput} from '../../Components/textInput/TextInput';
import moment from 'moment';

import api from '../../Services/api';

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
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('R$ ');
  const [complemento, setComplemento] = useState('');
  const [data, setData] = useState('');

  const [novoArray, SetnovoArray] = useState([]);

  // async function fetchItensList() {
  //   try {
  //     const response = await fetch('http://localhost:3000/itens-list');
  //     const resultado = await response.json();
  //     return resultado;
  //   } catch (error) {
  //     console.error('Erro ao buscar a lista de itens:', error);
  //     return []; // Retorna um array vazio em caso de erro
  //   }
  // }

  // useEffect(() => {
  //   fetchItensList().then(resultado => {
  //     SetnovoArray(resultado);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:3000/itens-list')
  //     .then(resul => resul.json())
  //     .then(resultado => {
  //       console.tron.log('testeee', resultado);
  //       SetnovoArray(resultado);
  //     });
  // }, []);

  useEffect(() => {
    getArray();
  }, []);

  const getArray = async () => {
    const array = await api.get('/itens');
    console.tron.log('teste de log*********', array);
  };

  useEffect(() => {
    setUseList(meuArray);
  }, []);

  const filterList = data => {
    const novaData = moment(data).format('DD-MM-YYYY');
    const Arrayfiltrado = meuArray.filter(item => item.data === novaData);
    setUseList(Arrayfiltrado);
    if (Arrayfiltrado.length < 1) {
    }
  };

  const clearFilter = () => {
    setUseList(meuArray);
  };
  const handleinclude = () => {
    setModalVisible(false);
  };
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

        <TouchableOpacity onPress={() => {}}>
          <Styled.StatusBt>
            <Text>Status</Text>
            <Icon name="caret-down" size={19} color="#000" />

            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
              <View
                style={{
                  height: '50%',
                  width: '80%',
                  backgroundColor: '#ffffff',
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
                <View
                  style={{
                    justifyContent: 'center',

                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text>CADASTRAR ITEM</Text>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    width: '97%',
                    margin: 2,
                    padding: 5,
                    paddingTop: 20,
                  }}>
                  <TextInput fontSize={18} placeholder="Nome" />
                  <TextInput
                    onChangeText={text => setValor(text)}
                    keyboardType={'numeric'}
                    fontSize={18}
                    value={valor}
                    placeholder="Valor"
                  />

                  <TextInput fontSize={18} placeholder="Complemento" />

                  <TextInput
                    onChangeText={text => setData(text)}
                    keyboardType="numeric"
                    fontSize={18}
                    placeholder="Data"
                    value={data}
                  />

                  <BotaoHome
                    width="35%"
                    color="#08c512f4"
                    height="30px"
                    title="Cadastrar"
                    radius="10px"
                    texto="14px"
                    onPress={() => handleinclude()}
                  />
                </View>
              </View>
            </Modal>
          </Styled.StatusBt>
        </TouchableOpacity>
      </Styled.ViewBts>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <BotaoHome
          width="35%"
          color="red"
          height="30px"
          title="Limpar filtro"
          radius="10px"
          texto="14px"
          onPress={() => clearFilter()}
        />
        <BotaoHome
          width="36%"
          color="#08c512f4"
          height="30px"
          title="Adicionar Iten"
          radius="10px"
          texto="14px"
          onPress={() => setModalVisible(true)}
        />
      </View>
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
