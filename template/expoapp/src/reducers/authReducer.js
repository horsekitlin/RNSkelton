import types from '~/constants/actionTypes';
import { authState } from './initialState';

const signinSuccess = (auth, payload) => ({
  ...auth,
  ...payload,
  isAuth: true,
});

export default function reducer(auth = authState, { type, payload }) {
  switch (type) {
    case types.SIGNIN_SUCCESS:
      return signinSuccess(auth, payload);
      case types.SIGNOUT:
        return { ...auth, isAuth: false, token: '', user: {} };
        case types.SIGNIN_ERROR:
      case types.SIGNIN:
    default:
      return auth;
  }
}
