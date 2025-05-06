import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HabbitScreen from '../screens/HabbitScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MainPage = ({ setIsLoggedin }: { setIsLoggedin: React.Dispatch<React.SetStateAction<boolean | null>> }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          if (route.name === 'Habbit') {
            iconName = 'leaf-outline';
          } else if (route.name === 'Progress') {
            iconName = 'bar-chart-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Habbit"
        component={HabbitScreen}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="leaf-outline" size={size} color={color} />
        //   ),
        // }}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialIcons name="home" color={'red'} size={24} />
        //   ),
        // }}
        
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
      />
      <Tab.Screen
        name="Profile"
      >
        {(props) => <ProfileScreen {...props} setIsLoggedin={setIsLoggedin} />}
      </Tab.Screen>
    </Tab.Navigator>

  );
};

export default MainPage

const styles = StyleSheet.create({})