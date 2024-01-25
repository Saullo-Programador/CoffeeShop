/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { HomeScreens } from './src/Pages/Home/HomeScreens';
import RouterApp from './src/Router/Router';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={[{backgroundColor:'#FFFFFF'}, styles.App]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='#ffffff'
      />
       <RouterApp/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App:{
    flex:1,
  }
})

export default App;
