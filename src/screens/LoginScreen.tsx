import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = ({ setIsLoggedin }: { setIsLoggedin :React.Dispatch<React.SetStateAction<boolean | null>>}) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('@userData');
    if(userData){
      const originalData = JSON.parse(userData);
      if(originalData.username === username && originalData.password === password){
        Alert.alert("Login Succesful");
        setIsLoggedin(true);
      }else{
        Alert.alert("Invalid Email or Password");
      }
    }else{
      Alert.alert("No User Found")
    }
    } catch (error) {
      Alert.alert("Error ");
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
        placeholder='username'
        inputMode='text'
        value={username}
        onChangeText={onChangeUsername}
        />
        <TextInput
        placeholder='password'
        inputMode='text'
        value={password}
        secureTextEntry
        onChangeText={onChangePassword}
        />
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLinkText}>Not Registered...</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerLinkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
})