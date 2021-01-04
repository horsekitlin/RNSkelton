import { put } from 'redux-saga/effects';
import types from '~/contants/actionTypes';

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
    console.log('🚀 ~ file: taskSagas.js ~ line 35 ~ function*addTaskSaga ~ error', error)
    const errorAction = errAdd(error);
    yield put(errorAction);
  }
}
