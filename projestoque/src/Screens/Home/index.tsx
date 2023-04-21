import React  from 'react';
import { Text, ImageBackground,TextInput,KeyboardAvoidingView, Platform ,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BotaoHome} from '../../Components/Button/index';
import * as Styled from './styles';
import { useState } from 'react';
import {BlurView } from '@react-native-community/blur'
 
export default function Home() {
  const img2 = '../../images/wites.jpg';
  const [text, onChangeText] = React.useState('');
  const [text2, onChangeText2] = React.useState('');

  const navigation = useNavigation();

  return (
    <Styled.Container>
      <ImageBackground
        source={require(img2)}
        style={{ flex:1 , width:'100%',}}>
          <Styled.ViewTexts>

            <Styled.TextWel>Welcome</Styled.TextWel> 
            <Styled.TextSub>It is very important to be patient, to be followed by the customer.
              Until the author is but the price of mourning.
            </Styled.TextSub>
          </Styled.ViewTexts>

        <Styled.ViewInput>
        <Styled.Input
        backgroundColor='transparent'
        placeholderTextColor="#000000"
        onChangeText={onChangeText}
        value={text}
        placeholder='Email Adress'
        color='#000'
        >
        </Styled.Input>
        <Styled.Input
        backgroundColor='transparent'
         placeholderTextColor="#000000"
         onChangeText={onChangeText2}
         value={text2}
         placeholder='* * * * *'
         color='#000'
         >
        </Styled.Input>

        </Styled.ViewInput>
        <BotaoHome 
        title={'Login'} 
        onPress={()=> navigation.navigate('Register')}
        color='#00ff6a'/>

      </ImageBackground>
    </Styled.Container>
) 
}