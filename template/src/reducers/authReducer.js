import types from '~/constants/actionTypes';
import { authState } from './initialState';

const loginSuccess = (auth, payload) =>
  auth.merge({ ...payload, isAuth: true });

const logoutSuccess = (auth) =>
  auth.merge({ isAuth: false });

export default function reducer(auth = authState, { type, payload }) {
  switch (type) {
    case types.LOGOUT_SUCCESS:
      return logoutSuccess(auth);
    case types.LOGIN_SUCCESS:
      return loginSuccess(auth, payload);
    case types.LOGIN:
    case types.LOGIN_ERROR:
    case types.LOGOUT:
    case types.LOGOUT_ERROR:
    default:
      return auth;
  }
}
