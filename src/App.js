import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthWrapper from './containers/AuthWrapper';
import HomeScene from './containers/HomeScene';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AuthWrapper>
          <Switch>
          <Route exact path="/" component={HomeScene} />
          </Switch>
          </AuthWrapper>
        </Router>
      </div>
    );
  }
}

export default App;
