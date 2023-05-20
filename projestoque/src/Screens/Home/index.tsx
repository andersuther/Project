import React from 'react';
import {
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function Home() {
  const img2 = '../../images/wites.jpg';
  const [text, onChangeText] = React.useState('');
  const [text2, onChangeText2] = React.useState('');

  const navigation = useNavigation();

  return (
    <Styled.Container>
      <ImageBackground source={require(img2)} style={{flex: 1, width: '100%'}}>
        <Styled.ViewTexts>
          <Styled.TextWel>Welcome</Styled.TextWel>
          <Styled.TextSub>
            It is very important to be patient, to be followed by the customer.
            Until the author is but the price of mourning.
          </Styled.TextSub>
        </Styled.ViewTexts>

        <Styled.ViewInput>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Icon
                name="arrow-forward-circle-outline"
                size={50}
                color="#900"
              />
            </TouchableOpacity>
          </View>
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
