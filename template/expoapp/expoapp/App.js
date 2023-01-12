import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthNavigation, UnauthNavigation } from '~/constants/naviagtions';
import store, {persistor} from '~/store/configureStore';

export default function App() {
  const {auth} = store.getState();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {
            auth.isAuth
              ? <AuthNavigation />
              : <UnauthNavigation />
          }
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
