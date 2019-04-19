import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/AppContainer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { WebGLRenderer } from 'three';

import "react-datepicker/dist/react-datepicker.css";
import "assets/css/material-dashboard-react.css?v=1.6.0";

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    palette: {
      dark: '#000',
      main: '#000'
    }
  },
  palette: {
    primary: {
      main: '#3751B8',
    },
    type: 'dark',
  },
});

const rootEl = document.getElementById('root')
const renderer = new WebGLRenderer({antialias: true})

const store = configureStore();

registerServiceWorker();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  rootEl
);


if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp renderer={renderer} />
      </Provider>,
      rootEl
    )
  })
}
