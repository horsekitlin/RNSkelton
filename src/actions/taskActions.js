import types from '~/contants/actionTypes';

export const addTaskAction = (payload) => ({
  type: types.ADD_TASK,
  payload,
});
