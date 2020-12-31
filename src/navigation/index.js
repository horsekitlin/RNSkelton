import { Navigation } from 'react-native-navigation';
import HomeScreen from '~/screens/HomeScreen';
import SettingScreen from '~/screens/SettingScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Setting', () => SettingScreen);

export const startMain = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
};

