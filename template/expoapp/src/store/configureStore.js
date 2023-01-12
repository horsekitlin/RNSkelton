import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {
  startFetchingMiddleware,
  stopFetchingMiddleware
} from '~/middlewares/fetchHandlerMiddleware';
import { snackbarHandlerMiddleware } from '~/middlewares/snackbarHandlerMiddleware';
import rootReducer from '~/reducers';
import rootSaga from '~/sagas';

const persistConfig = {
  key: 'storeCache',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [startFetchingMiddleware, sagaMiddleware, stopFetchingMiddleware, snackbarHandlerMiddleware];

  if (__DEV__) {
  }
  
  const composeEnhancers = __DEV__
    ? composeWithDevTools({})
    : compose;

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);
  if (__DEV__) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      )
    });
  }
  return {
    persistor,
    store: {
      ...store,
      runSaga: sagaMiddleware.run(rootSaga),
    },
  };
};

const {store, persistor} = configureStore();

export { persistor };
export default store;
