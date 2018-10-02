import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './containers/AppContainer';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </Router>
);