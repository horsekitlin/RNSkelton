import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import store, {persistor} from '~/store/configureStore';
import HomeScreen from '~/screens/HomeScreen';
import LoginScreen from '~/screens/LoginScreen';
import SignupScreen from '~/screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                options={{headerShown: false}}
                component={HomeScreen}
              />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
