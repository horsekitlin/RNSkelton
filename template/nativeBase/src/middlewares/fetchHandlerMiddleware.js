import { Navigation } from 'react-native-navigation';
import {basicAsyncActionTypes, asyncActionTypes} from '~/constants/actionTypes';
import { showLoading } from '~/utils/navigationHelper';

const responseRegExp = /SUCCESS|ERROR/;

export const startFetchingMiddleware = (store) => (next) => (action) => {
  const isResponseAction = responseRegExp.test(action.type);
  const isAsyncAction = basicAsyncActionTypes.includes(action.type);

  if (isAsyncAction && !isResponseAction) {
    showLoading();
  }
  return next(action);
};

export const stopFetchingMiddleware = (store) => (next) => (action) => {
  const isResponseAction = responseRegExp.test(action.type);
  const isAsyncAction = asyncActionTypes.includes(action.type);

  if (isAsyncAction && isResponseAction) {
    Navigation.dismissOverlay('LOADING_SCREEN');
  }
  return next(action);
};
