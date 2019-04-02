import constants from 'flux-constants';

const syncActions = [
  'LOGOUT',
  'HANDLE_SIDEBAR'
];

export const aSyncActions = [
  'LOGIN',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
];

export default constants([...syncActions, ...aSyncActions]);
