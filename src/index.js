import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/AppContainer';
import { WebGLRenderer } from 'three';

import "assets/css/material-dashboard-react.css?v=1.6.0";

const rootEl = document.getElementById('root')
const renderer = new WebGLRenderer({antialias: true})

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
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

registerServiceWorker();