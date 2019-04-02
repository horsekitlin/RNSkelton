import {routeState} from './initialState';

export default function(route = routeState, { type, payload }) {
  switch (type) {
    default:
      return route;
  }
}
