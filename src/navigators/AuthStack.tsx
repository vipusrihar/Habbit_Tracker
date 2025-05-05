import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = ({ setIsLoggedin}: { setIsLoggedin :React.Dispatch<React.SetStateAction<boolean | null>> }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login'>
        {
          (props) =>
            <LoginScreen
              {...props}
              setIsLoggedin={setIsLoggedin} />}
      </Stack.Screen>


      <Stack.Screen name='Register'>
        {
          (props) =>
            <RegisterScreen
              {...props}
              setIsLoggedin={setIsLoggedin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack

const styles = StyleSheet.create({})