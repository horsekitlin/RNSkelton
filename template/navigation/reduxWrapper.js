import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from '~/store/configureStore';
import {NavigationProvider} from 'react-native-navigation-hooks';
import {PersistGate} from 'redux-persist/integration/react';

const reduxWrapper = (Component) => (props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationProvider value={{componentId: props.componentId}}>
        <Component {...props} />
      </NavigationProvider>
    </PersistGate>
  </Provider>
);

export default reduxWrapper;
