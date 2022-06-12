// In index.js of a new project
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksScreen from '../TasksScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Tasks"
          component={TasksScreen}
          options={{
            tabBarIcon: ({size, color}) => (<FontAwesome name={"search"} color={color} size={size} />)
        }}
        />
      </Tab.Navigator>
  );
};

export default HomeScreen;
