import constants from 'flux-constants';

const syncActionTypes = [
  'SIGNOUT',
  'START_FETCHING',
  'STOP_FETCHING',
];

export const basicAsyncActionTypes = [
  'SIGNIN',
  'SIGNUP',
  'GET_TASKS',
  'CREATE_TASK',
  'UPDATE_TASK',
];

export const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`
  ];
}, []);

export default constants([...asyncActionTypes, ...syncActionTypes]);