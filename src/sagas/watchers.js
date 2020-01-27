import types from '../constants/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { loginSaga, getConfirmCodeSaga } from './authSagas';
import { initialAppSaga } from './initialAppSaga';

export function* watchInitialAppSaga() {
  yield takeLatest(types.INITIAL_APP, initialAppSaga);
}
export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}

export function* watchGetConfirmCodeSaga() {
  yield takeLatest(types.GET_CONFIRMATION_CODE, getConfirmCodeSaga);
}
