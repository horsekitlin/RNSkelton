import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/AppContainer';
import { WebGLRenderer } from 'three';

const rootEl = document.getElementById('root')
const renderer = new WebGLRenderer({antialias: true})

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
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