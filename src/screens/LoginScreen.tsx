import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { getUserData } from '../utills/UserStorage'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const LoginScreen = ({ setIsLoggedin }: { setIsLoggedin: React.Dispatch<React.SetStateAction<boolean | null>> }) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  // const navigation = useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();


  const handleLogin = async () => {
    try {
      const userData = await getUserData();
      if (userData) {
        const originalData: { username: string; email:string; password: string } =userData;
        console.log(originalData)
        if (originalData.username === username && originalData.password === password) {
          Alert.alert("Login Succesful");
          setIsLoggedin(true);
        } else {
          Alert.alert("Invalid Email or Password");
        }
      } else {
        Alert.alert("No User Found")
      }
    } catch (error) {
      Alert.alert("Error ");
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder='username'
          inputMode='text'
          value={username}
          onChangeText={onChangeUsername}
          style={styles.inputfield}
        />
        <TextInput
          placeholder='password'
          inputMode='text'
          value={password}
          secureTextEntry
          onChangeText={onChangePassword}
          style={styles.inputfield}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
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
  container: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center'
  },
  inputfield: {
    color: 'black',
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 16
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerLinkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
})