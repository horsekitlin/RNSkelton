import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './containers/LoginContainer';
import Main from './containers/MainContainer';
class App extends Component {
  render() {
    return this.props.user.login.ok
      ? <Main />
      : <Login />
    
  }
}

export default App;
{/* <div className="App">
<Router>
  <Switch>
    <Route exact path="/" component={HomeScene} />
  </Switch>
</Router>
</div> */}