import { put } from 'redux-saga/effects';
import types from '~/constants/actionTypes';

const sleep = (ms = 5000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
}

const okAdd = (newTask) => ({
  type: types.ADD_TASK_SUCCESS,
  payload: newTask,
});

const errAdd = ({ message }) => {
  return {
    type: types.ADD_TASK_ERROR,
    payload: {
      message
    }
  };
};

export function* addTaskSaga({ payload }) {
  try {
    yield sleep();
    const newTask = {
      ...payload,
      complete: false,
    };
    yield put(okAdd(newTask));
  } catch (error) {
    const errorAction = errAdd(error);
    yield put(errorAction);
  }
}
