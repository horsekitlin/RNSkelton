import types from '~/contants/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { loginSaga, logoutSaga } from './authSagas';

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(types.LOGOUT, logoutSaga);
}
