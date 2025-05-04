/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,} from 'react-native';

import {
  Colors,} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './navigators/RootNavigator';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}



export default App;
