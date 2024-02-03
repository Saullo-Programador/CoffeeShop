import React from 'react'
import BottomTabs from './BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './StackNavigation';

export default function RouterApp() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}
