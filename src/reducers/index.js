import { combineReducers } from 'redux';
import user from './user';
import settings from './settings';

const appReducer = combineReducers({
  user,
  settings
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
