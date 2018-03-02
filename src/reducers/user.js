import initialState from './initialState';
import types from '../constants/actionTypes';

export default function(user = initialState.user, { type, payload }) {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return {
        ...user,
        login: {
          ...{
            ok: payload.ok
          }
        }
      }
    default:
      return user;
  }
}
