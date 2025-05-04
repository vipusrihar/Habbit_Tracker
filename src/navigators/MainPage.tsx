import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HabbitScreen from '../screens/HabbitScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Habbit' component={HabbitScreen}/>
        <Tab.Screen name='Progress' component={ProgressScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default MainPage

const styles = StyleSheet.create({})