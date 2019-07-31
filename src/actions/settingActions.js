import types from '../constants/actionTypes';

export const initialAppAction = payload => ({
  type: types.INITIAL_APP,
  payload,
});
