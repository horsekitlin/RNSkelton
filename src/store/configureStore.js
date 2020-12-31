import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '~/reducers';
import rootSaga from '~/sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );

  if (__DEV__) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return {
    ...store,
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

const store = configureStore();

export default store;