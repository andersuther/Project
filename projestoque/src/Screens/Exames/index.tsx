import React, {useState, useEffect} from 'react';
import {Alert, LogBox} from 'react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import RadioIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Input, Modal} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import DatePicker from 'react-native-date-picker';
import {TextInput} from '../../Components/textInput/TextInput';
import moment from 'moment';
import {getList, createIten, DeleteItens} from './api';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

const Dashboard: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [useList, setUseList] = useState<any>([]);
  const [initialData, setInitialData] = useState([]);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [complemento, setComplemento] = useState('');

  useEffect(() => {
    getArray();
  }, []);

  const getArray = async () => {
    const array = await getList();
    setUseList(array?.allItens);
    setInitialData(array?.allItens);
    console.tron.log('teste de log*********', array);
  };

  const create = async () => {
    const obj = {
      nome,
      valor: valor.length > 0 ? 'R$ ' + valor : '',
      complemento,
    };
    setNome('');
    setValor('');
    setComplemento('');
    createIten(obj, getArray, Alert);
    setModalVisible(false);
  };

  const filterList = data => {
    const novaData = moment(data).format('DD-MM-YYYY');

    const Arrayfiltrado = initialData.filter(
      item => moment(item.created_at).format('DD-MM-YYYY') === novaData,
    );
    setUseList(Arrayfiltrado);
    if (Arrayfiltrado.length < 1) {
    }
  };

  const clearFilter = () => {
    setUseList(initialData);
  };

  const deleteItem = async id => {
    await DeleteItens(id);
    getArray();
  };

  return (
    <Styled.Container>
      <View style={{backgroundColor: '#9417'}}>
        <Styled.VTextExame>
          <Styled.TextItem>MEUS ITEMS</Styled.TextItem>
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
              <Text style={{color: '#fff'}}>Data</Text>
            </Styled.DataBt>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Styled.StatusBt>
              <Text style={{color: '#fff'}}>Status</Text>
              <Icon name="caret-down" size={19} color="#000" />

              <Modal
                isOpen={modalVisible}
                onClose={() => setModalVisible(false)}>
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
                    <Text>CADASTRAR NOVO ITEM</Text>
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      width: '100%',
                      margin: 2,
                      padding: 5,
                      paddingTop: 20,
                    }}>
                    <TextInput
                      onChangeText={text => setNome(text)}
                      fontSize={18}
                      placeholder="Nome"
                    />
                    <TextInput
                      onChangeText={text => setValor(text)}
                      keyboardType={'numeric'}
                      fontSize={18}
                      value={valor}
                      placeholder="Valor"
                    />
                    <TextInput
                      onChangeText={text => setComplemento(text)}
                      fontSize={18}
                      placeholder="Complemento"
                    />
                    <View style={{paddingTop: 15}}>
                      <BotaoHome
                        width="35%"
                        color="#08c512f4"
                        height="30px"
                        title="Cadastrar"
                        radius="10px"
                        texto="14px"
                        onPress={() => create()}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </Styled.StatusBt>
          </TouchableOpacity>
        </Styled.ViewBts>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <BotaoHome
            width="36%"
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
            title="Adicionar Item"
            radius="10px"
            texto="14px"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <Styled.Scroll>
        <View>
          {useList?.map(item => (
            <>
              <Styled.ViewArray>
                <View
                  style={{
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    width: 28,
                    height: 28,
                  }}>
                  <TouchableOpacity
                    style={{width: 28, height: 28}}
                    onPress={() => deleteItem(item.id)}>
                    <RadioIcon name="trash-can" size={25} color={'#f50606'} />
                  </TouchableOpacity>
                </View>
                {/* <Animatable.Text
                  animation="slideInDown"
                  iterationCount="infinite"
                  direction="alternate">
                  Up and down you go
                </Animatable.Text>
                <Animatable.Text
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  style={{textAlign: 'center'}}>
                  ❤️
                </Animatable.Text> */}
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
                  Data:{' '}
                  <Styled.TextAr>
                    {' '}
                    {moment(item?.created_at).format('DD-MM-YYYY')}
                  </Styled.TextAr>
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
