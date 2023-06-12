import React, {useState} from 'react';
import {
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
  Touchable,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';
import Icone from 'react-native-vector-icons/dist/Ionicons';
import RadioIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Radio, Icon, Modal, ScrollView} from 'native-base';
import {TextInput} from '../../Components/textInput/TextInput';
import Reactotron from 'reactotron-react-native';

export default function Cadastro() {
  const img2 = '../../images/wites.jpg';
  const img6 = '../../images/manman.png';
  const img7 = '../../images/logot.png';

  const [text, onChangeText] = useState('');
  const [text2, onChangeText2] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {height} = Dimensions.get('window');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate, goBack} = useNavigation<any>();
  const navigation = useNavigation();

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
              onChangeText={value => setUser(value)}
              placeholder="Usuario"
            />
            <TextInput
              onChangeText={value => setEmail(value)}
              placeholder="Email"
            />
            <TextInput
              onChangeText={value => setPassword(value)}
              placeholder="Senha"
            />
          </Styled.ViewTexts>

          <Styled.ViewBtCriar>
            <BotaoHome
              onPress={() => navigate('Login')}
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