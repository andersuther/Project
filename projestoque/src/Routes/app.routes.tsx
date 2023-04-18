import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home";
import Register from "../Screens/Register";

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
        </AppStack.Navigator>
    )
}

export default AppRoutes;