import React, { Component } from 'react';
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
