import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../Screens/Home/HomeScreen';
import ProdutoScreen from '../Screens/Produto/ProdutoScreen';
import FavoritoScreens from '../Screens/Favorito/FavoritoScreen';
import BottomTabs from './BottomTabs';
import CarrinhoScreen from '../Screens/Carrinho/CarrinhoScreen';
import { Welcome } from '../Screens/Welcome/welcomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator 
    initialRouteName='Welcome'
    screenOptions={{headerShown: false}}
    >
    <Stack.Screen name='Welcome' component={Welcome}/>
    <Stack.Screen name="Home" component={BottomTabs}/>
    <Stack.Screen name="Produto" component={ProdutoScreen}/>
    <Stack.Screen name='Pedido' component={CarrinhoNavigation}/>
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

export const CarrinhoNavigation: React.FC = () =>(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Carrinho' component={CarrinhoScreen}/>
  </Stack.Navigator>
)
