
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import settingReducer from './settingReducer';

export default combineReducers({
  auth: authReducer,
  setting: settingReducer
});
