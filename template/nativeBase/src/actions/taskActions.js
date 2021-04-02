import types from '~/constants/actionTypes';

export const addTaskAction = (payload) => ({
  type: types.ADD_TASK,
  payload,
});
