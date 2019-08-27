import {useReducer} from 'react';

export default (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch = (action) => {
    const {promise, types, ...rest} = action;
    if(!promise) return dispatch(action);

    const [REQUEST, SUCCESS, ERROR] = types;
    dispatch({...rest, type: REQUEST});

    return promise
      .then(result => dispatch({...rest, result, type: SUCCESS}))
      .catch(error => dispatch({...rest, error, type: ERROR}))
  };

  return [state, thunkDispatch];
}