import { put } from 'redux-saga/effects';
import types from '../constants/actionTypes';

const okLogin = () => ({
  type: types.LOGIN_SUCCESS,
});

const errLogin = ({ message, status }) => {
  return {
    type: types.LOGIN_ERROR,
    payload: {
      message: getErrorMessage(message)
    }
  };
};

export function* loginSaga({ payload }) {
  try {
    console.log('login saga');
    const resAction = true ? okLogin() : errLogin();

    yield put(resAction);
  } catch (error) {
    const errorAction = errLogin(error);
    yield put(errorAction);
  }
}
