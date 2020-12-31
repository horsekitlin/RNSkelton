// In index.js of a new project
import React from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { Navigation } from 'react-native-navigation';

const HomeScreen = (props) => {
  return (
    <Container>
      <Content>
        <Button onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Setting',
            options: {
              topBar: {
                title: {
                  text: 'Setting'
                }
              }
            }
          }
        })}>
          <Text>Setting</Text>
        </Button>
      </Content>
    </Container>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
};

export default HomeScreen;
