import React, { Component } from 'react';
import Login from './containers/LoginContainer';
import Home from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {

  }

  render() {
    if(!this.props.user.login.ok) {
      return <Login />
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
