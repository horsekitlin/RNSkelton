import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});

  const middlewares = [sagaMiddleware];

  const composeEnhancers = __DEV__ ? composeWithDevTools : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (__DEV__) {
    var acceptCallback = () => {
      const nextRootReducer = combineReducers(require('../reducers/index'));
      store.replaceReducer(nextRootReducer);
    }
  
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', acceptCallback);
    module.hot.acceptCallback = acceptCallback;

    // module.hot.accept('../reducers', () => {
    //   const nextRootReducer = require('../reducers/index').default;
    //   store.replaceReducer(nextRootReducer);
    // });
  }
  return {
    ...store,
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

const store = configureStore();

export default store;
