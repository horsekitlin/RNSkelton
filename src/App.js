import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import store from './store/configureStore';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
