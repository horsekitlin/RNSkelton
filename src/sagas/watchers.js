import types from '../constants/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import {loginSaga} from './authSagas';
import { initialAppSaga } from './initialAppSaga';

export function* watchInitialAppSaga() {
  yield takeLatest(types.INITIAL_APP, initialAppSaga);
}
export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}

