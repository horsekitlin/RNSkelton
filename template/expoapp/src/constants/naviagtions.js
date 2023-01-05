import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~/screens/HomeScreen';
import LoginScreen from '~/screens/LoginScreen';
import SignupScreen from '~/screens/SignupScreen';
import ResetPasswordScreen from '~/screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{headerShown: false}}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

export const UnauthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
);
