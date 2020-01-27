import {fromJS} from 'immutable';

export const authState = fromJS({
  isAuth: false,
  confirmation: null
});

export const settingState = fromJS({
  isInitialed: false,
});
