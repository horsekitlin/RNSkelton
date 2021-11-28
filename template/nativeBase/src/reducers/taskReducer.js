import cloneDeep from 'lodash/cloneDeep';
import types from '~/constants/actionTypes';
import {taskState} from './initialState';

const updateTaskSuccess = (task, payload) => {
  const {index, ...nextTask} = payload;
  const nextTaskList = cloneDeep(task.list);
  nextTaskList[index] = nextTask;
  return {
    ...task,
    list: [...nextTaskList],
  };
};
export default function reducer(task = taskState, {type, payload}) {
  switch (type) {
    case types.ADD_TASK_SUCCESS:
      return {
        ...task,
        list: [...task.list, payload],
      };
    case types.DELETE_TASK_SUCCESS:
      return {
        ...task,
        list: task.list.filter((_, index) => index !== payload.index),
      };
    case types.UPDATE_TASK_SUCCESS:
      return updateTaskSuccess(task, payload);
    case types.DELETE_TASK:
    case types.DELETE_TASK_ERROR:
    case types.UPDATE_TASK:
    case types.UPDATE_TASK_ERROR:
    case types.ADD_TASK:
    case types.ADD_TASK_ERROR:
    default:
      return task;
  }
}
