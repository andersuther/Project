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
import {Spinner} from 'native-base';
import * as Styled from './styles';
import {TabContent} from '../../Components/TabContent/TabContent';
import {TextInput} from '../../Components/textInput/TextInput';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Login: React.FC = () => {
  const img5 = '../../images/manman.png';
  const img6 = '../../images/logot.png';

  const {navigate, goBack} = useNavigation<any>();
  const {height} = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [loading, setIsLoanding] = useState(false);

  GoogleSignin.configure({
    webClientId:
      '584059978562-p1ab3ll70m456anqoldmvkh87fcr38h4.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    setIsLoanding(true);
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    console.tron.log('teste', googleCredential);
    navigate('Exames');
    setIsLoanding(false);
    return auth().signInWithCredential(googleCredential);
  }
  async function logar() {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        alert('Bem-vindo:' + value?.user?.email);
        setEmail('');
        setPassword('');
        navigate('Exames');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          alert('Senha invalida');
          return;
        }
        if (error.code === 'auth/invald-password') {
          alert('Email invalido');
          return;
        } else {
          alert('Ops algo deu errado!');
          return;
        }
      });
  }

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
            {loading && <Spinner color={'#203de6'} size={70} />}
          </Styled.Viewlogo>
          {!loading && (
            <>
              <Styled.Viewtab>
                <TabContent
                  titleTab1={'Cliente'}
                  titleTab2={'Logistica'}
                  content1={
                    <>
                      {/* <Text>{user}</Text> */}
                      <Icon name="person-sharp" size={25} color="#000" />
                      <TextInput
                        onChangeText={value => setEmail(value)}
                        placeholder="Usuario"
                      />
                      <TextInput
                        secureTextEntry={Icon}
                        onChangeText={value => setPassword(value)}
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
                        onChangeText={value => setEmail(value)}
                        placeholder="CNPJ/CPF"
                      />
                      <TextInput
                        secureTextEntry={Icon}
                        onChangeText={value => setPassword(value)}
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
                  onPress={() => logar()}
                  height={'40px'}
                  width={'50%'}
                  title={'Entrar'}
                  color={'#000'}
                  // isLoading={loading}
                />
                <BotaoHome
                  onPress={() => onGoogleButtonPress()}
                  Iconame={true}
                  height={'40px'}
                  width={'50%'}
                  title={'Google'}
                  color={'#000'}
                  Flexdir={'row'}
                  pd={'2px'}
                  isLoading={loading}
                />
              </Styled.ViewButton>
              <Styled.ViewBtConta>
                <TouchableOpacity onPress={() => navigate('Cadastro')}>
                  <Styled.TxtCrie>Crie sua conta!</Styled.TxtCrie>
                </TouchableOpacity>
                {/* {user.length > 0 ? (
              <TouchableOpacity onPress={() => logout()}>
                <Styled.TxtSair>Sair</Styled.TxtSair>
              </TouchableOpacity>
            ) : (
              <></>
            )} */}
              </Styled.ViewBtConta>
            </>
          )}
        </ImageBackground>
      </KeyboardAvoidingView>
    </Styled.Container>
  );
};

export default Login;
