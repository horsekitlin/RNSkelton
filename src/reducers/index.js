import { combineReducers } from 'redux';
import user from './userReducer';
import route from './routeReducer';

const appReducer = combineReducers({
  user,
  route
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
