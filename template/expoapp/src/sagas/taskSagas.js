import types from '~/constants/actionTypes';
import {createTaskResult, getTasksResult, updateTaskResult} from '~/apis/tasks';
import fetchAPIResult from '~/utils/SagaHelper';

export function* getTasksSaga({payload}) {
  return yield fetchAPIResult({
    payload,
    apiResult: getTasksResult,
    actionType: types.GET_TASKS,
    resultHandler: response => {
      return {
        page: payload.page,
        pageSize: payload.pageSize,
        ...response.items,
      };
    }
  });
}

export function* createTaskSaga({payload}) {
  return yield fetchAPIResult({
    payload,
    apiResult: createTaskResult,
    actionType: types.CREATE_TASK,
    onSuccess: payload.onSuccess,
  });
}

export function* updateTaskSaga({payload}) {
  const {onSuccess, message, ...nextPayload} = payload;
  return yield fetchAPIResult({
    message,
    onSuccess,
    payload: nextPayload,
    apiResult: updateTaskResult,
    actionType: types.UPDATE_TASK,
    resultHandler: () => {
      return nextPayload;
    }
  });
}
