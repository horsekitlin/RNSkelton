import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import MainScreen from './screens/MainScreen';
import reducers, {ReducerContext} from './reducers';
import thunkReducer from './helpers/thunkHelper';

const initState = reducers();
const App = () => {
  const store = thunkReducer(reducers, initState);

  return (
    <ReducerContext.Provider value={store}>
      <ThemeProvider>
        <MainScreen />
      </ThemeProvider>
    </ReducerContext.Provider>
  );
};

export default App;
