import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from '~/store/configureStore';
import {NavigationProvider} from 'react-native-navigation-hooks';
import {PersistGate} from 'redux-persist/integration/react';
import { NativeBaseProvider } from 'native-base';
import LoadingScreen from '~/screens/LoadingScreen';

const reduxWrapper = (Component) => (props) =>
  (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <Component {...props} />
          </NavigationProvider>
        </PersistGate>
        <LoadingScreen />
      </Provider>
    </NativeBaseProvider>
  );

export default reduxWrapper;
