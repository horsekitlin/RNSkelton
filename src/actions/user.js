import types from "../constants/actionTypes";

export const handleLogin = payload => ({
  type: types.LOGIN,
  payload
});