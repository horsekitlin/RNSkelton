import isEmpty from 'lodash/isEmpty';

export const snackbarHandlerMiddleware = (store) => (next) => (action) => {
  const {snackbar, ...nextAction} = action;

  if (action['@@redux-saga/SAGA_ACTION'] && !isEmpty(snackbar)) {
    const {text} = snackbar;
    // showDialogModal({
    //   title: '系統信息',
    //   message: [{text}],
    // });
  }

  return next(nextAction);
};
