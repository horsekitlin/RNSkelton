// In index.js of a new project
import React from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { Navigation } from 'react-native-navigation';

const SettingScreen = (props) => {
  return (
    <Container>
      <Content>
        <Button onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Home',
            options: {
              topBar: {
                title: {
                  text: 'Home'
                }
              }
            }
          }
        })}>
          <Text>Home</Text>
        </Button>
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
