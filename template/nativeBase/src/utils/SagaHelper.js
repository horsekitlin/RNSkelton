import {put, select, call} from 'redux-saga/effects';
import {isFunction, isEmpty} from 'lodash';

const okFetch = (payload, actionType, message) => {
  const successPayload = {
    type: `${actionType}_SUCCESS`,
    payload,
    snackbar: {
      type: 'success',
      text: message,
    },
  };

  if (isEmpty(message)) delete successPayload.snackbar;

  return successPayload;
};

const errFetch = ({code, message: text}, actionType) => ({
  type: `${actionType}_ERROR`,
  payload: {code, text},
  snackbar: {
    type: 'danger',
    text,
  },
});

const parseError = (error) => {
  const {response} = error;

  if (isEmpty(response)) return error;

  const {data: resData} = response;
  return resData.data;
};

const getBodyAndHeaders = ({type, payload, token, headers}) => {
  const bearerToken = `Bearer ${token}`;
  if (type === 'FORM') {
    return {
      params: payload,
      newHeaders: {
        Authorization: bearerToken,
        'Content-Type': 'multipart/form-data',
      },
    };
  }

  return {
    params: payload,
    newHeaders: {
      Authorization: bearerToken,
      ...headers,
    },
  };
};

export default function* fetchAPIResult({
  type = 'RESTFUL',
  apiResult = () => false,
  headers = {},
  payload = {},
  actionType,
  message = '',
  onError = null,
  onSuccess = null,
  resultHandler = null,
}) {
  try {
    const token = yield select(({auth}) => auth.token);

    const {params, newHeaders} = getBodyAndHeaders({
      type,
      payload,
      token,
      headers,
    });

    const {data: resData} = yield call(apiResult, params, newHeaders);

    if (isFunction(resultHandler)) {
      return yield put(
        okFetch(resultHandler(resData.data), actionType, message),
      );
    }

    if (isFunction(onSuccess)) onSuccess();

    yield put(okFetch(resData.data, actionType, message));
  } catch (error) {
    if (isFunction(onError)) onError();
    yield put(errFetch(parseError(error), actionType));
  }
}
