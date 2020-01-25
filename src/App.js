import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import store from './store/configureStore';
import RootNavigationContainer from './containers/RootNavigationContainer';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootNavigationContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
