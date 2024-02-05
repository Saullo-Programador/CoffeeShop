import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { LogBox, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconHome from 'react-native-vector-icons/Foundation'
import { CarrinhoNavigation, FavoritoNavigation, HomeNavigation } from './StackNavigation';
import { View } from 'react-native';

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle:{ 
          height: 70, 
          borderTopLeftRadius: 25, 
          borderTopRightRadius: 25, 
        }
      }}>
      <Tab.Screen 
        name='HomeTab' 
        component={HomeNavigation}
        options={{
          tabBarIcon:({ focused }) =>(
            <>
              <IconHome 
                name='home' 
                size={32}
                color={focused ? '#C67C4E' : '#6D6D6D'}
              />
              {focused ? <View style={styles.Ativado}></View> : null}
            </>
          ),
        }}
      />
      <Tab.Screen 
        name='FavoritosTab' 
        component={FavoritoNavigation}
        options={{
          tabBarIcon:({ focused }) =>(
            <>
              <Icon 
                name='favorite' 
                size={30}
                color={ focused ? '#C67C4E' : '#6D6D6D'}
              />
               {focused ? <View style={styles.Ativado}></View> : null}
            </>
          )
        }}
      />
      <Tab.Screen
        name='CarrinhoTab'
        component={CarrinhoNavigation}
        options={{
          tabBarIcon:({ focused }) =>(
            <>
              <Icon
                name='shopping-cart'
                size={30}
                color={focused ? '#C67C4E' : '#6D6D6D'}
              />
              {focused ? <View style={styles.Ativado}></View> : null }
            </>
          )
        }}
      />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  Ativado:{
    width: 24,
    height: 7,
    marginTop: 3,
    borderRadius: 10,
    backgroundColor: '#C67C4E',
  }
})