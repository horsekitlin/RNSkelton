import React from 'react';
import {View, Text} from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import MainContainer from '../containers/MainContainer';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
import COLORS from '../constants/Colors';

// Tab Bar Options
const options = {
  defaultNavigationOptions: ({ navigation }) => ({

    tabBarIcon: () => {
      return (
        <Text>Home</Text>
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: '#4168fe',
    inactiveTintColor: 'rgba(0,0,0,0.3)',
    style: {
      backgroundColor: '#fbfbfb',
      borderTopColor: '#ddd',
      borderTopWidth: 1,
      paddingTop: 5,
    },
    labelStyle: {
      fontSize: 11,
      paddingTop: 5,
      fontWeight: '500',
    }
  },
};

// Tab Bar Options
const stackOptions = {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerTitleStyle: {
      flex: 1,
      fontWeight: '200',
      color: '#fff',
      textAlign: 'center',
    },
    ...Platform.select({
      ios: {
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: COLORS.headerBackground,
          borderBottomColor: '#3457da',
          borderBottomWidth: 1,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
      },
      android: {
        headerStyle: {
          backgroundColor: COLORS.headerBackground,
          borderBottomColor: '#3457da',
          borderBottomWidth: 1,
          elevation: 0,
        },
        headerBackImage: <Image source={require('../assets/images/ic-arrow-ios.png')} />,
        headerRight: < View />
      }
    })
  },
  navigationOptions: ({ navigation }) => {

    return {};
  },
};

const PublicStack = createStackNavigator({
  Login: {
    screen: LoginContainer,
  },
}, stackOptions);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeContainer
    },
  },
  stackOptions
);

const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
  },
  options
);

const MainNavigator = createSwitchNavigator(
  {
    AuthLoading: MainContainer,
    App: AppStack,
    Auth: PublicStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(MainNavigator);