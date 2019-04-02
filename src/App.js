import React, { PureComponent } from 'react';
import Login from './containers/LoginContainer';
import Home from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends PureComponent {
  componentDidMount() {

  }

  render() {
    const hasLogin = this.props.user.getIn(['login', 'ok']);
    if(!hasLogin) {
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
