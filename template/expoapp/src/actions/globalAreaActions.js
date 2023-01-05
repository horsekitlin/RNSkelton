import types from '~/constants/actionTypes';

export const startFetchingAction = (actionType) => ({
  type: types.START_FETCHING,
  payload: actionType,
});

export const stopFetchingAction = (actionType) => ({
  type: types.STOP_FETCHING,
  payload: actionType,
});
