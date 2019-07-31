import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import store from './store/configureStore';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
