import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={}/>
        <Stack.Screen name='Register' component={}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})