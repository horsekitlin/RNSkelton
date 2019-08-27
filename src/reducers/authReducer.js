import { authState } from './initialState';

const authReducer = (auth = authState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...auth, isAuth: true };
    case 'LOGIN':
    case 'LOGIN_ERROR':
    default:
      return auth;
  }
};

export default authReducer;
