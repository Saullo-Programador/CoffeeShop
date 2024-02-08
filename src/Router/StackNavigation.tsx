import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../Screens/Home/HomeScreen';
import ProdutoScreen from '../Screens/Produto/ProdutoScreen';
import { Welcome } from '../Screens/Welcome/welcomeScreen';
import {PedidoScreen} from '../Screens/Pedido/PedidoScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator 
    initialRouteName='Welcome'
    screenOptions={{headerShown: false}}
    >
    <Stack.Screen name='Welcome' component={Welcome}/>
    <Stack.Screen name="Home" component={HomeNavigation}/>
    <Stack.Screen name="Produto" component={ProdutoScreen}/>
    <Stack.Screen name='Pedido' component={PedidoNavigation}/>
  </Stack.Navigator>
);

export default AppNavigator;


export const HomeNavigation: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='HomeScreen' component={HomeScreens} />
  </Stack.Navigator>
);

export const PedidoNavigation: React.FC = () =>(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='PedidoScreen' component={PedidoScreen}/>
  </Stack.Navigator>
)
