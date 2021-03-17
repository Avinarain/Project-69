import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ScanScreen from './screens/ScanScreen'
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component{
  render(){
  return (
    <SafeAreaProvider>
    <View >
    <Header
  centerComponent={{ text: 'BarCode Scanner', style: { color: '#fff',fontSize:20 } }}
/>
      <ScanScreen/>
      </View>
</SafeAreaProvider>
  );
  }
}
