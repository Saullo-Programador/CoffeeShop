import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreens } from '../Pages/Home/HomeScreens';
import ProdutoScreens from '../Pages/Produto/ProdutoScreens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreens}/>
      <Stack.Screen name='Produto' component={ProdutoScreens}/>
    </Stack.Navigator>
  )
}
