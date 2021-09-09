import React, { Component } from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import  Welcome from "./screens/Welcome/Welcome"
import Intro from "./screens/Intro/Intro"
// import  Welcome from "./screens/index"

const Stack = createStackNavigator();

export default function createHomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Intro" component={Intro} />
        </Stack.Navigator>
    )
}