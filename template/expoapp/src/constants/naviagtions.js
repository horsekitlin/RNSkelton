import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from '~/screens/HomeScreen';
import SettingScreen from '~/screens/SettingScreen';
import LoginScreen from '~/screens/LoginScreen';
import SignupScreen from '~/screens/SignupScreen';
import ResetPasswordScreen from '~/screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const SettingStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Setting" component={SettingScreen} />
  </Stack.Navigator>
);

export const AuthNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focus, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingTab"
        component={SettingStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focus, color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
  </Tab.Navigator>  
);

export const UnauthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
);
