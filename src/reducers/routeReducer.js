import initialState from './initialState';

export default function(route = initialState.route, { type, payload }) {
  switch (type) {
    default:
      return route;
  }
}
