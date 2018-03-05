import initialState from './initialState';
import types from '../constants/actionTypes';

function handleSidebar(settings, payload){
  return {
    ...settings,
    ...{ sidebar: payload.sidebar }
  };
}

export default function(settings = initialState.settings, { type, payload }) {
  switch (type) {
    case types.HANDLE_SIDEBAR:
      return handleSidebar(settings, payload);
    default:
      return settings;
  }
}
