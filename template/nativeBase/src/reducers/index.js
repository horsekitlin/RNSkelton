import { combineReducers } from 'redux';
import auth from './authReducer';
import task from './taskReducer';

export default combineReducers({
  auth,
  task,
});
