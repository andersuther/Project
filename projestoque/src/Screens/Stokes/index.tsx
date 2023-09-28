import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Stokes() {
  const [text3, onChangeText3] = React.useState('');
  const [text4, onChangeText4] = React.useState('');

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="Name and Surname"></TextInput>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        onChangeText={onChangeText4}
        value={text4}
        placeholder="Password"></TextInput>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        onChangeText={onChangeText4}
        value={text4}
        placeholder="Phone"></TextInput>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        onChangeText={onChangeText4}
        value={text4}
        placeholder="Password"></TextInput>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Button title="Register" onPress={() => {}} />
      </View>
    </View>
  );
}
