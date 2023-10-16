import React, {useState} from 'react';
import {ImageBackground, Image, Dimensions, Alert} from 'react-native';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';

import {ScrollView} from 'native-base';
import {TextInput} from '../../Components/textInput/TextInput';

import auth from '@react-native-firebase/auth';

export default function Cadastro() {
  const img6 = '../../images/teste1.jpg';
  const img7 = '../../images/logonew.png';

  const {height} = Dimensions.get('window');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function cadastro() {
    if (!email || !password) {
      Alert.alert('Todos os campos são obrigatórios.');
      return;
    }
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        Alert.alert('Cadastro realizado: ' + value.user?.email);
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/weak-password') {
          Alert.alert('Sua senha deve ter pelomenos 6 caracteres');
          return;
        }
        if (error.code === 'auth/invald-password') {
          Alert.alert('Email invalido');
          return;
        } else {
          Alert.alert('Ops algo deu errado!');
          return;
        }
      });
  }

  return (
    <Styled.Container>
      <ScrollView style={{flex: 1}}>
        <ImageBackground source={require(img6)} style={{height: height}}>
          <Styled.Viewlogo>
            <Image
              source={require(img7)}
              style={{
                width: '48%',
                height: '51%',
              }}
            />
            <Styled.TextWel>Bem-Vindo</Styled.TextWel>
            <Styled.TextSub>Iremos começar criando sua conta!</Styled.TextSub>
          </Styled.Viewlogo>
          <Styled.ViewTexts>
            <TextInput
              onChangeText={value => setEmail(value)}
              placeholder="Email"
              value={email}
            />
            <TextInput
              onChangeText={value => setPassword(value)}
              placeholder="Senha"
              value={password}
            />
          </Styled.ViewTexts>

          <Styled.ViewBtCriar>
            <BotaoHome
              onPress={() => cadastro()}
              height={'40px'}
              width={'100%'}
              title={'Criar!'}
              color={'#000'}
            />
          </Styled.ViewBtCriar>
        </ImageBackground>
      </ScrollView>
    </Styled.Container>
  );
}
