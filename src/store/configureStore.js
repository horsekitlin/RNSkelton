import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};


export default configureStore;
