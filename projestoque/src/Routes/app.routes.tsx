import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/';
import Login from '../Screens/Login';
import Cadastro from '../Screens/Cadastro';
import Stokes from '../Screens/Stokes';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <AppStack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Stokes"
        component={Stokes}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
