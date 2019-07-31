import types from '../constants/actionTypes';
import { put } from 'redux-saga/effects';

const okInitial = () => ({
  type: types.INITIAL_APP_SUCCESS,
  payload: {}
});

const errInitial = () => ({
  type: types.INITIAL_APP_ERROR,
  payload: {}
});

export function* initialAppSaga() {
  try {
    const resAction = true ? okInitial(): errInitial();
    yield put(resAction);
  }catch(error) {
    const errorAction = errInitial(error);
    yield put(errorAction);
  }
}

