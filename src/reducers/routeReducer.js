import initialState from './initialState';
import types from '../constants/actionTypes';

export default function(route = initialState.route, { type, payload }) {
  switch (type) {
    default:
      return route;
  }
}
