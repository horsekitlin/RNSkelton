import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen';

export const LoginRoutes = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={LoginScreen} />
    </NativeRouter>
  );
}

export const AppRoutes = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomeScreen} />
    </NativeRouter>
  );
}