import React from 'react';
import sinon from 'sinon';
import LoginScene from '../../components/LoginScene';
import { mount, shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let Component = null,
  userReducer = null,
  settingsReducer = null,
  handleLogin = null;

describe('LoginScene unitest', () => {
  beforeEach(() => {
    handleLogin = sinon.spy();
    userReducer = Object.assign({}, initialState.user);

    Component = mount(
      <LoginScene user={userReducer} handleLogin={handleLogin} />
    );
  });
  it('should test AuthWrapper', () => {
    let state = Component.state();
    expect(state.email).toBe('');
    Component.find("input[name='email']").simulate('change', {
      target: { name: 'email', value: 'test@gmail.com' }
    });
    expect(Component.state().email).toBe('test@gmail.com');
  });
});
