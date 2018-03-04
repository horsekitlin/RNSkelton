import initialState from './initialState';
import types from '../constants/actionTypes';

export default function(settings = initialState.settings, { type, payload }) {
  switch (type) {
    case types.HANDLE_SIDEBAR:
      return {
        ...settings,
        ...{ sidebar: payload.sidebar }
      };
    default:
      return settings;
  }
}
