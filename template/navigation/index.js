import Icon from 'react-native-vector-icons/FontAwesome';
import {Navigation} from 'react-native-navigation';
import HomeScreen from '~/screens/HomeScreen';
import SettingScreen from '~/screens/SettingScreen';
import reduxWrapper from './reduxWrapper';
import LoadingScreen from '~/screens/LoadingScreen';
import { getHomeStack, getSettingStack } from './stacks';
import { getIcons } from './icons';
import commonColor from '~/native-base-theme/variables/commonColor';

Navigation.registerComponent('Home', () => reduxWrapper(HomeScreen));
Navigation.registerComponent('Setting', () => reduxWrapper(SettingScreen));
Navigation.registerComponent('Loading', () => reduxWrapper(LoadingScreen));

export const startMain = () => {
  const icons = getIcons();

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_HOME',
        options: {
          bottomTabs: {
            backgroundColor: commonColor.brandPrimary,
          }
        },
        children: [
          {
            stack: getHomeStack(icons.homeIcon, icons.selectedHomeIcon),
          },
          {
            stack: getSettingStack(icons.settingIcon, icons.selectedSettingIcon),
          },
        ],
      },
    },
  });
};