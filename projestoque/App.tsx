import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';
import { StatusBar } from 'react-native';

export default function App() {
 return (
   <NavigationContainer>
    <StatusBar backgroundColor="#131313"/>
    <Routes/>
    </NavigationContainer>
  );
}