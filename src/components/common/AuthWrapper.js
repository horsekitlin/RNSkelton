import React from 'react';
import propTypes from 'prop-types';
import LoginScene from '../../containers/LoginScene';
import { Icon, Menu, Segment } from 'semantic-ui-react';

const AuthWrapper = props => {
  return props.user.login.ok ? (
    <div>
      <Menu attached="top" stackable>
        <Menu.Item onClick={() => console.log('side bar')}>
          <Icon name="bars" size="large" />
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  ) : (
    <LoginScene />
  );
};

AuthWrapper.propType = {
  user: propTypes.object.isRequired
};

export default AuthWrapper;
