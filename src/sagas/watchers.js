import types from '../constants/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import {
  loginSaga
} from './authSagas';

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}