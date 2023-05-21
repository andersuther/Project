import React from 'react';
import {
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import {TabContent} from '../../Components/TabContent/TabContent';
import {TextInput} from '../../Components/textInput/TextInput';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Login: React.FC = () => {
  const img5 = '../../images/manman.png';
  const img6 = '../../images/logot.png';

  const {navigate, goBack} = useNavigation<any>();
  const {height} = Dimensions.get('window');

  return (
    <Styled.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{flex: 1}}>
        <ImageBackground source={require(img5)} style={{height: height}}>
          <Styled.Viewlogo>
            <Image
              source={require(img6)}
              style={{width: '48%', height: '51%'}}
            />
          </Styled.Viewlogo>

          <Styled.Viewtab>
            <TabContent
              titleTab1={'Cliente'}
              titleTab2={'Logistica'}
              content1={
                <>
                  <Icon name="person-sharp" size={25} color="#000" />
                  <TextInput placeholder="User" />
                  <TextInput
                    secureTextEntry={Icon}
                    placeholder="Password"
                    heigth={50}
                    fontSize={25}
                    padL={12}
                  />
                </>
              }
              content2={
                <>
                  <Icon name="briefcase" size={25} color="#000" />
                  <TextInput placeholder="CNPJ/CPF" />
                  <TextInput
                    secureTextEntry={Icon}
                    placeholder="Password"
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
          </Styled.ViewButton>
        </ImageBackground>
      </KeyboardAvoidingView>
    </Styled.Container>
  );
};

export default Login;
