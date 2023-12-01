import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation, UnauthNavigation } from '~/constants/naviagtions';
import store, { persistor } from '~/store/configureStore';
import { theme } from '~/constants/core/theme';

const ValidateAuthScreen = (props) => {

  return props.isAuth
    ? <AuthNavigation />
    : <UnauthNavigation />
};

const mapStateToProps = ({auth}) => {
  return {
    isAuth: auth.isAuth,
  };
};

const ValidateAuthRoute = connect(mapStateToProps)(ValidateAuthScreen);

const App = () => (
  <NavigationContainer>
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ValidateAuthRoute />
        </PersistGate>
      </Provider>
    </PaperProvider>
  </NavigationContainer>
);

export default App;
