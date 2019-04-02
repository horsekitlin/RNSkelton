import {fromJS} from 'immutable';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

export const userState = fromJS({
  login: {
    ok: true
  }
});

export const routeState = {
  history
};
