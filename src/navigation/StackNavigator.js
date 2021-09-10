import React, { Component } from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import  Welcome from "./screens/Welcome/Welcome"
import Intro from "./screens/Intro/Intro"
import Login from "./screens/Login/Login"

import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
// import  Welcome from "./screens/index"

const Stack = createStackNavigator();
const HEIGHT = heightPercentageToDP('100%');
const WIDTH = widthPercentageToDP('100%');
global.screenheight = HEIGHT;
global.screenwidth = WIDTH;


export default function createHomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}