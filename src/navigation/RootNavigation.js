import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import { Icon, ThemeContext } from 'react-native-elements';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';

const RootNavigation = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router
      sceneStyle={{ backgroundColor: 'white' }}
      navigationBarStyle={{ backgroundColor: theme.colors.grey1 }}
    >
      <Stack key='root' hideNavBar>
        <Stack key='login_stack' initial={!props.isAuth}>
          <Scene
            title='登入'
            key='login'
            component={LoginContainer}
          />
          <Scene
            title='註冊'
            key='register'
            component={RegisterContainer}
          />
        </Stack>
        <Tabs
          initial={props.isAuth}
          key='tabbar'
          routeName='tabbar'
          // backToInitial
          tabStyle={{
            backgroundColor: theme.colors.grey1,
            paddingTop: 8
          }}
          tabBarStyle={[styles.tabBarStyle, { backgroundColor: theme.colors.grey1 }]}
          labelStyle={styles.labelStyle}
          activeTintColor={theme.colors.primary}
          inactiveTintColor={theme.colors.grey4}
        >
          <Stack
          initial
            key='home'
            title='聊天'
            icon={() => <Icon name='heart' type='font-awesome' />}
          >
            <Scene key='home' component={HomeContainer} title='聊天' />
          </Stack>
        </Tabs>
      </Stack>
    </Router>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  container: { flex: 1 },
  labelStyle: { paddingTop: 2, paddingBottom: 4, fontSize: 14 },
  tabBarStyle: {    
    height: 60
  },
});
