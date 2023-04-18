import React, {useEffect, useState} from 'react';
import {ImageBackground, Text,View} from 'react-native';


export default function Register() {

    const img1 = '../../images/wites.jpg';

  return (
   <View style={{flex:1}}>
    <ImageBackground 
    source={require(img1)}
    style={{flex:1}}
    >
    </ImageBackground>
   </View>
  );
}
