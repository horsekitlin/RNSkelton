import types from '../constants/actionTypes';
import { settingState } from './initialState';

export default function reducer(setting = settingState, { type, payload }) {
  switch (type) {
    case types.INITIAL_APP_SUCCESS:
        return setting.merge({isInitialed: true});
    case types.INITIAL_APP:
    case types.INITIAL_APP_ERROR:
    default:
      return setting;
  }
}
