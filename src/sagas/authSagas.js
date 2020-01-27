import { put } from 'redux-saga/effects';
import types from '../constants/actionTypes';
import auth from '@react-native-firebase/auth';

const okLogin = (confirmation) => ({
  type: types.LOGIN_SUCCESS,
});

const errLogin = ({ message, status }) => {
  return {
    type: types.LOGIN_ERROR,
    payload: {
      message,
    }
  };
};

const firebaseSignInWithPhoneNumber = (phoneNumber) => {
  return auth().signInWithPhoneNumber(phoneNumber);
};
export function* loginSaga({ payload }) {
  try {
    const {code, confirmation} = payload;
    yield confirmation.confirm(code);

    yield put(okLogin());
  } catch (error) {
    const errorAction = errLogin(error);
    yield put(errorAction);
  }
}

const okGet = (confirmation) => ({
  type: types.GET_CONFIRMATION_CODE_SUCCESS,
  payload: confirmation
});

const errGet = ({ message, status }) => {
  return {
    type: types.GET_CONFIRMATION_CODE_ERROR,
    payload: {
      message
    }
  };
};

export function* getConfirmCodeSaga({ payload }) {
  try {
    const confirmation = yield firebaseSignInWithPhoneNumber(payload.phoneNumber);

    yield put(okGet(confirmation));
  } catch (error) {
    const errorAction = errGet(error);
    yield put(errorAction);
  }
}