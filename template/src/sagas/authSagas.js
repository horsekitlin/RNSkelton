import { put } from 'redux-saga/effects';
import types from '~/constants/actionTypes';

const okLogin = () => ({
  type: types.LOGIN_SUCCESS,
  payload: {},
});

const errLogin = ({ message }) => {
  return {
    type: types.LOGIN_ERROR,
    payload: {
      message
    }
  };
};

export function* loginSaga() {
  try {
    yield put(okLogin());
  } catch (error) {
    const errorAction = errLogin(error);
    yield put(errorAction);
  }
}

const okLogout = () => ({
  type: types.LOGOUT_SUCCESS,
});

const errLogout = ({ message }) => {
  return {
    type: types.LOGOUT_ERROR,
    payload: {
      message
    }
  };
};

export function* logoutSaga() {
  try {
    
    yield put(okLogout());
  } catch (error) {
    const errorAction = errLogout(error);
    yield put(errorAction);
  }
}