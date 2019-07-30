import { authState } from './initialState';

export default function reducer(auth = authState, { type, payload }) {
  switch (type) {
    default:
      return auth;
  }
}
