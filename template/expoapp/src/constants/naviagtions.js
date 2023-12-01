import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TaskScreen from '~/screens/TaskScreen';
import SettingScreen from '~/screens/SettingScreen';
import LoginScreen from '~/screens/LoginScreen';
import SignupScreen from '~/screens/SignupScreen';
import CreateTaskScreen from '~/screens/CreateTaskScreen';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TaskStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Task"
      component={TaskScreen}
      options={{
        headerRight: () => {
          const navigation = useNavigation();
          return (
            <IconButton
              onPress={() => navigation.navigate('CreateTask', {mode: 'created'})}
              icon="plus"
            />
          );
        },
      }}
    />
    <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
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
        name="TaskTab"
        component={TaskStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focus, color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
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
  </Stack.Navigator>
);
