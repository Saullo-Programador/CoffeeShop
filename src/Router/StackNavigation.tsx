import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import HomeScreens from '../Screens/Home/HomeScreen';
import ProdutoScreens from '../Screens/Produto/ProdutoScreen';
import FavoritoScreens from '../Screens/Favorito/FavoritoScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={{headerShown: false}}
    >
    <Stack.Screen name="Home" component={BottomTabs}/>
    <Stack.Screen name="Produto" component={ProdutoScreens}/>
  </Stack.Navigator>
);

export default AppNavigator;


export const HomeNavigation: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={HomeScreens} />
  </Stack.Navigator>
);

export const FavoritoNavigation: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Favorito' component={FavoritoScreens} />
  </Stack.Navigator>
);

