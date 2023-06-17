import React, {useState, useEffect} from 'react';
import {ImageBackground, TouchableOpacity, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import Icone from 'react-native-vector-icons/dist/Ionicons';
import RadioIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Radio, Icon, Modal} from 'native-base';
import firebase from '../../firebaseConnetion';

export default function Home() {
  const img2 = '../../images/wites.jpg';
  const [text, onChangeText] = useState('');
  const [text2, onChangeText2] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('Carregando ..');
  const [email, setEmail] = useState('Carregando..');
  const [usuarios, setUsuarios] = useState([]);

  const tamanho = 350;
  const tamanhoIcon = 90;
  const tamanhoPorcent = (tamanhoIcon * tamanho) / 100;

  const navigation = useNavigation();

  useEffect(() => {
    async function dados() {
      await firebase.database().ref('tipo').set('Teste2');
      await firebase
        .database()
        .ref('usuarios/1/')
        .on('value', snapshot => {
          setNome(snapshot.val().nome);
          setIdade(snapshot.val().idade);
        });
    }
    dados();
  }, []);

  return (
    <Styled.Container>
      {/* <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
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
            <RadioIcon name="alien" size={tamanhoPorcent} color={'#3dd41e'} /> */}
      {/* </TouchableOpacity> */}
      {/* </View> */}
      {/* </Modal> */}
      <ImageBackground source={require(img2)} style={{flex: 1, width: '100%'}}>
        <Styled.ViewTexts>
          <Styled.TextWel>Welcome</Styled.TextWel>

          <Styled.TextSub>
            It is very important to be patient, to be followed by the customer.
            Until the author is but the price of mourninlg. {'\n'}
            {'\n'} Ola {nome} , Idade {email}
          </Styled.TextSub>
        </Styled.ViewTexts>
        <Styled.ViewInput>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => teste()}>
              <Icone
                name="arrow-forward-circle-outline"
                size={30}
                color="#05f7f7fd"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icone
                name="arrow-forward-circle-outline"
                size={30}
                color="#900"
              />
            </TouchableOpacity>
          </View>
          <Radio.Group
            defaultValue="1"
            onChange={v => setRadioValue(v)}
            size="lg"
            name="exampleGroup"
            accessibilityLabel="pick a choice">
            <Radio
              size={radioValue === '1' ? 38 : 30}
              backgroundColor={radioValue === '1' ? '#7f1' : '#fff'}
              _text={{
                mx: 2,
              }}
              colorScheme="green"
              value="1"
              icon={<Icon as={<RadioIcon name="alien" />} size={34} />}
              my={1}>
              Alien
            </Radio>
            <Radio
              size={radioValue === '2' ? 38 : 30}
              backgroundColor={radioValue === '2' ? '#eba872' : '#fff'}
              _text={{
                mx: 2,
              }}
              colorScheme="red"
              value="2"
              icon={<Icon as={<RadioIcon name="fire" />} size={34} />}
              my={1}>
              Fire
            </Radio>
            <Radio
              size={radioValue === '3' ? 38 : 30}
              colorScheme="warning"
              backgroundColor={radioValue === '3' ? '#c6c932' : '#fff'}
              _text={{
                mx: 2,
              }}
              value="3"
              icon={
                <Icon
                  as={<RadioIcon name="lightning-bolt" />}
                  size={radioValue === '3' ? 28 : 34}
                />
              }
              my={1}>
              Storm
            </Radio>
          </Radio.Group>
          <Styled.Input
            backgroundColor="transparent"
            placeholderTextColor="#000000"
            onChangeText={onChangeText}
            value={text}
            placeholder="Email Adress"
            color="#000"></Styled.Input>
          <Styled.Input
            backgroundColor="transparent"
            placeholderTextColor="#000000"
            onChangeText={onChangeText2}
            value={text2}
            placeholder="* * * * *"
            color="#000"></Styled.Input>
        </Styled.ViewInput>
        <BotaoHome
          title={'Login'}
          onPress={() => navigation.navigate('Login')}
          color="#00ff6a"
          width="100%"
          height="35px"
        />
      </ImageBackground>
    </Styled.Container>
  );
}
