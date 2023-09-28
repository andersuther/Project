import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';
import {StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';

if (__DEV__) {
  import('./src/config/reactotronConfig').then(() =>
    console.tron.log('Reactotron Initialized'),
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#131313" />
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
