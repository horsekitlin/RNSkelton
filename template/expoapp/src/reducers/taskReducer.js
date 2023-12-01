import cloneDeep from 'lodash/cloneDeep';
import types from '~/constants/actionTypes';
import {taskState} from './initialState';

const getTaskSuccess = (task, payload) => {
  const nextRows = payload.page === 1
  ? payload.rows
  : task.rows.concat(payload.rows);
  return {
    ...task,
    count: payload.count,
    rows: nextRows,
    page: payload.page,
    pageSize: payload.pageSize,
  };
};

export default function reducer(task = cloneDeep(taskState), {type, payload}) {
  switch (type) {
    case types.UPDATE_TASK_SUCCESS:
      const nextTask = cloneDeep(task);
      const {index, tabIndex, isCompleted = null} = payload;

      if (isCompleted === true && tabIndex === 1) {
        nextTask.rows.splice(index, 1);
        return nextTask;
      }

      if (isCompleted === false && tabIndex === 2) {
        nextTask.rows.splice(index, 1);
        return nextTask;
      }

      const nextTaskItem = nextTask.rows[index];
      nextTaskItem.isCompleted = isCompleted;
      nextTask.rows[index] = nextTaskItem;
      return nextTask;
    case types.GET_TASKS:
      if (payload.page === 1) {
        return cloneDeep(taskState);
      }
      return task;
    case types.GET_TASKS_SUCCESS:
      return getTaskSuccess(task, payload);
    case types.GET_TASKS_ERROR:
    case types.CREATE_TASK:
    case types.CREATE_TASK_SUCCESS:
    case types.CREATE_TASK_ERROR:
    case types.UPDATE_TASK:
    case types.UPDATE_TASK_ERROR:
    default:
      return task;
  }
}
