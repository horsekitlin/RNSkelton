import types from '~/constants/actionTypes';

export const addTaskAction = (payload) => ({
  type: types.ADD_TASK,
  payload,
});

export const updateTaskAction = (payload) => ({
  type: types.UPDATE_TASK,
  payload,
});

export const deleteTaskAction = (payload) => ({
  type: types.DELETE_TASK,
  payload,
});
