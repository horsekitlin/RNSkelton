import React from 'react';
import { Provider } from 'react-redux';
import store from '~/store/configureStore';
import { NavigationProvider } from 'react-native-navigation-hooks'

const reduxWrapper = (Component) => props => (
  <Provider store={store} >
    <NavigationProvider value={{ componentId: props.componentId }} >
      <Component {...props} />
    </NavigationProvider>
  </Provider>
);

export default reduxWrapper;
