import {Navigation} from 'react-native-navigation';
import HomeScreen from '~/screens/HomeScreen';
import SettingScreen from '~/screens/SettingScreen';
import reduxWrapper from './reduxWrapper';

Navigation.registerComponent('Home', () => reduxWrapper(HomeScreen));
Navigation.registerComponent('Setting', () => reduxWrapper(SettingScreen));

export const startMain = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_HOME',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      visible: true,
                      title: 'Home',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Setting',
                    options: {
                      visible: true,
                      title: 'Setting',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Setting',
                },
              },
            },
          },
        ],
      },
    },
  });
};
