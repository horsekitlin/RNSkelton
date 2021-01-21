import types from '~/constants/actionTypes';
import { taskState } from './initialState';

export default function reducer(task = taskState, { type, payload }) {
  switch (type) {
    case types.ADD_TASK_SUCCESS:
      return {
        ...task,
        list: [...task.list, payload]
      }
    case types.ADD_TASK:
    case types.ADD_TASK_ERROR:
    default:
      return task;
  }
}
