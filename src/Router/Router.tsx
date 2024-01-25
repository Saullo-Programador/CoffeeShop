import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
export default function RouterApp() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}
