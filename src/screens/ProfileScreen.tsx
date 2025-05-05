import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SetStateAction } from 'react';

const ProfileScreen = ({setIsLoggedin}: { setIsLoggedin :React.Dispatch<React.SetStateAction<boolean | null>>}) => {

  const handleLogout = async () => {
    // await AsyncStorage.removeItem('@userData'); 
    setIsLoggedin(false); 
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to Profile</Text>
    <Button title="Logout" onPress={handleLogout} />
  </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})