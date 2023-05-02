import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home/";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import Exames from "../Screens/Exames";

const AppStack = createNativeStackNavigator();

function AppRoutes() {
    
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home" component={Home}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="Register" component={Register}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="Login" component={Login}
                options={{ headerShown: false }}
              
            />
            <AppStack.Screen
                name="Exames" component={Exames}
                options={{ headerShown: true }}
              
            />
        </AppStack.Navigator>
    )
}

export default AppRoutes;