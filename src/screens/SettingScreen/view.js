// In index.js of a new project
import React, { useState } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

const SettingScreen = (props) => {
  const [settings, setSettings] = useState({
    airPlaneMode: false,
    wifi: false,
    bluetooth: false,
  });

  return (
    <Container>
      <Header />
      <Content>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#FF9501" }}>
              <Icon active name="airplane" />
            </Button>
          </Left>
          <Body>
            <Text>Airplane Mode</Text>
          </Body>
          <Right>
            <Switch value={settings.airPlaneMode} onValueChange={value => setSettings({ ...settings, airPlaneMode: value })} />
            <Text>{ settings.airPlaneMode? 'On': 'Off'}</Text>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
            <Text>Wi-Fi</Text>
          </Body>
          <Right>
            <Switch value={settings.wifi} onValueChange={value => setSettings({ ...settings, wifi: value })} />
            <Text>{ settings.wifi? 'On': 'Off'}</Text>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>Bluetooth</Text>
          </Body>
          <Right>
            <Switch value={settings.bluetooth} onValueChange={value => setSettings({ ...settings, bluetooth: value })} />
            <Text>{settings.bluetooth ? 'On' : 'Off'}</Text>
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

SettingScreen.options = {
  topBar: {
    title: {
      text: 'Setting'
    }
  },
  bottomTab: {
    text: 'Setting'
  }
};

export default SettingScreen;
