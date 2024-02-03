import React from 'react';
import RouterApp from './src/Router/Router';
import { KeyboardAvoidingView, Platform } from 'react-native';

function App(): React.JSX.Element {

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-100}
      accessibilityRole='alert'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1,}}>
      <RouterApp/>
    </KeyboardAvoidingView>
  );
}

export default App;
