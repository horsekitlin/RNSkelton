import types from '../constants/actionTypes';

export const loginAction = payload => ({
  type: types.LOGIN,
  payload
});

export const getConfirmationCodeAction = payload => ({
  type: types.GET_CONFIRMATION_CODE,
  payload,
});
