import { put, call } from 'redux-saga/effects';
import types from "../constants/actionTypes";

const mockLogin = () => new Promise(resolve =>
  setTimeout(() => {
    resolve();
  }, 1000)
);

export function* loginSaga({ payload }) {
  try {
    yield call(mockLogin);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: {
        ok: true
      }
    });
  } catch (error) {
    yield put({
      type: types.LOGIN,
      payload: {
        ok: false
      }
    });
  }
}
