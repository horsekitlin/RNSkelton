import types from '~/constants/actionTypes';

export const getTasksAction = (payload) => ({
  type: types.GET_TASKS,
  payload,
});

export const createTaskAction = payload => ({
  type: types.CREATE_TASK,
  payload,
});

export const updateTaskAction = (payload) => ({
  type: types.UPDATE_TASK,
  payload,
});