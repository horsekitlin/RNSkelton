import {createContext} from 'react';
import combineReducer from '../helpers/combineReducer';
import auth from './authReducer';
import initialState from './initialState';

const reducer = combineReducer({
  auth
});

export const ReducerContext = createContext(initialState);

export default reducer;
