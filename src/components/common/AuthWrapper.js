import React from 'react';
import propTypes from 'prop-types';
import LoginScene from '../../containers/LoginScene';
import { Icon, Menu, Segment, Sidebar, Header, Image } from 'semantic-ui-react';

const NavbarIcon = props => {
  return (
    <Icon name={props.sidebar ? "times" : "bars"} size="large" />
  );
};

const AuthWrapper = props => {
  return props.user.login.ok ? (
    <div>
      <Menu attached="top" stackable>
        <Menu.Item
          onClick={() =>
            props.handleSidebar({ sidebar: !props.settings.sidebar })
          }
        >
          <NavbarIcon sidebar={props.settings.sidebar} />
        </Menu.Item>
      </Menu>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          visible={props.settings.sidebar}
          icon="labeled"
          vertical
        >
          <Menu.Item name="home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item name="camera">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic style={{ width: '100vw', height: '90vh' }}>
            {props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  ) : (
    <LoginScene />
  );
};

AuthWrapper.propType = {
  user: propTypes.object.isRequired,
  handleSidebar: propTypes.func.isRequired
};

export default AuthWrapper;
