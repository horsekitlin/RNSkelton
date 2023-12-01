import types from '~/constants/actionTypes';
import {signinResult, signupResult} from '~/apis/auth';
import fetchAPIResult from '~/utils/SagaHelper';

export function* signinSaga({ payload }) {
  return yield fetchAPIResult({
    apiResult: signinResult,
    payload,
    actionType: types.SIGNIN,
  });
}

export function* signupSaga({ payload }) {
  const {
    phone,
    name,
    password,
    onSuccess,
  } = payload;
  return yield fetchAPIResult({
    apiResult: signupResult,
    payload: {
      phone,
      name,
      password,
    },
    actionType: types.SIGNUP,
    onSuccess,
  });
}
