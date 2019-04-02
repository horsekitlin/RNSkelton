import {userState} from './initialState';
import types from '../constants/actionTypes';

export default function(user = userState, { type, payload }) {
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
