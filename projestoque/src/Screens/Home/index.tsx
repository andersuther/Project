import React from 'react';
import { Text, View , ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BotaoHome} from './styles';


export default function Home() {
    const img2 = '../../images/wites.jpg';
    const navigation = useNavigation();

return(
<View style={{flex:1}}>
      <ImageBackground
        source={require(img2)}
        style={{flex:1}}>

      <BotaoHome onPress={() => navigation.navigate('Register')}/>
        
       </ImageBackground>
</View>
)
}
