import { put } from 'redux-saga/effects';
import types from '~/constants/actionTypes';

const sleep = (ms = 1000) => {
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
      isComplete: false,
    };
    yield put(okAdd(newTask));
  } catch (error) {
    const errorAction = errAdd(error);
    yield put(errorAction);
  }
}

const okUpdate = (newTask) => ({
  type: types.UPDATE_TASK_SUCCESS,
  payload: newTask,
});

const errUpdate = ({ message }) => {
  return {
    type: types.UPDATE_TASK_ERROR,
    payload: {
      message
    }
  };
};

export function* updateTaskSaga({ payload }) {
  try {
    yield sleep();

    yield put(okUpdate(payload));
  } catch (error) {
    const errorAction = errUpdate(error);
    yield put(errorAction);
  }
}

const okDelete = (newTask) => ({
  type: types.DELETE_TASK_SUCCESS,
  payload: newTask,
});

const errDelete = ({ message }) => {
  return {
    type: types.DELETE_TASK_ERROR,
    payload: {
      message
    }
  };
};

export function* deleteTaskSaga({ payload }) {
  try {
    yield sleep();

    yield put(okDelete(payload));
  } catch (error) {
    const errorAction = errDelete(error);
    yield put(errorAction);
  }
}
