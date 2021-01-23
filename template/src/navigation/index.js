import Icon from 'react-native-vector-icons/FontAwesome';
import {Navigation} from 'react-native-navigation';
import HomeScreen from '~/screens/HomeScreen';
import SettingScreen from '~/screens/SettingScreen';
import reduxWrapper from './reduxWrapper';
import LoadingScreen from '~/screens/LoadingScreen';

Navigation.registerComponent('Home', () => reduxWrapper(HomeScreen));
Navigation.registerComponent('Setting', () => reduxWrapper(SettingScreen));
Navigation.registerComponent('Loading', () => reduxWrapper(LoadingScreen));

export const startMain = async () => {
  const homeIcon = await Icon.getImageSource('home', 20, '#CCCCCC');
  const settingIcon = await Icon.getImageSource('cogs', 20, '#CCCCCC');
  const selectedHomeIcon = await Icon.getImageSource('home', 20, 'red');
  const selectedSettingIcon = await Icon.getImageSource('cogs', 20, 'red');

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
                  icon: homeIcon,
                  selectedIcon: selectedHomeIcon,
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
                  icon: settingIcon,
                  selectedIcon: selectedSettingIcon,
                },
              },
            },
          },
        ],
      },
    },
  });
};
