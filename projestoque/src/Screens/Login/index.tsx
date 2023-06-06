import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import {TabContent} from '../../Components/TabContent/TabContent';
import {TextInput} from '../../Components/textInput/TextInput';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Reactotron from 'reactotron-react-native';
import firebase from '../../firebaseConnetion';

import Api from '../../Services/api';
import {Row} from 'native-base';

const Login: React.FC = () => {
  const img5 = '../../images/manman.png';
  const img6 = '../../images/logot.png';

  const {navigate, goBack} = useNavigation<any>();
  const {height} = Dimensions.get('window');
  const [user, SetUser] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <Styled.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{flex: 1}}>
        <ImageBackground source={require(img5)} style={{height: height}}>
          <Styled.Viewlogo>
            <Image
              source={require(img6)}
              style={{width: '48%', height: '53%'}}
            />
          </Styled.Viewlogo>

          <Styled.Viewtab>
            <TabContent
              titleTab1={'Cliente'}
              titleTab2={'Logistica'}
              content1={
                <>
                  <Icon name="person-sharp" size={25} color="#000" />
                  <TextInput
                    onChangeText={value => SetUser(value)}
                    placeholder="Usuario"
                  />
                  <TextInput
                    secureTextEntry={Icon}
                    onChangeText={value => SetPassword(value)}
                    placeholder="Senha"
                    heigth={50}
                    fontSize={25}
                    padL={12}
                  />
                </>
              }
              content2={
                <>
                  <Icon name="briefcase" size={25} color="#000" />
                  <TextInput
                    onChangeText={value => SetUser(value)}
                    placeholder="CNPJ/CPF"
                  />
                  <TextInput
                    secureTextEntry={Icon}
                    onChangeText={value => SetPassword(value)}
                    placeholder="Senha"
                    heigth={50}
                    fontSize={25}
                  />
                </>
              }
            />
          </Styled.Viewtab>
          <Styled.ViewButton>
            <BotaoHome
              onPress={() => navigate('Exames')}
              height={'40px'}
              width={'50%'}
              title={'Entrar'}
              color={'#000'}
            />
            <BotaoHome
              Iconame={true}
              height={'40px'}
              width={'50%'}
              title={'Google'}
              color={'#000'}
              Flexdir={'row'}
              pd={'2px'}
            />
            <TouchableOpacity onPress={() => navigate('Cadastro')}>
              <Styled.TxtCrie>Crie sua conta!</Styled.TxtCrie>
            </TouchableOpacity>
            <Styled.ViewBtConta></Styled.ViewBtConta>
          </Styled.ViewButton>
        </ImageBackground>
      </KeyboardAvoidingView>
    </Styled.Container>
  );
};

export default Login;
