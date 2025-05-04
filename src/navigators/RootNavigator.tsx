import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainPage from './MainPage';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const isLoggedin = false;
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
        {
        isLoggedin ? (
            <Stack.Screen name='main' component={MainPage}/>
        ) : (
            <Stack.Screen name='Auth' component={AuthStack}/>
        )
        }
    </Stack.Navigator>
  )
}

export default RootNavigator
