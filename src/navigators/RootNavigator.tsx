import { View, Text, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainPage from './MainPage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const userData = await AsyncStorage.getItem('@userData');
      setIsLoggedin(!!userData); 
    };
    checkUser();
  }, []);
  

  if (isLoggedin === null) {
    // Still loading
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        isLoggedin ? (
          <Stack.Screen name='Main' options={{ animation: 'fade' }}>
            {(props) => <MainPage {...props} setIsLoggedin={setIsLoggedin} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name='Auth' options={{ animation: 'fade' }}>
            {(props) => <AuthStack {...props} setIsLoggedin={setIsLoggedin} />}
          </Stack.Screen>
        )
      }
    </Stack.Navigator>
  )
}

export default RootNavigator
