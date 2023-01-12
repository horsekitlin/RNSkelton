import { combineReducers } from 'redux';
import auth from './authReducer';
import task from './taskReducer';
import setting from './settingReducer';

export default combineReducers({
  auth,
  task,
  setting,
});
