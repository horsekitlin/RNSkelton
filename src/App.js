// In index.js of a new project
import { Navigation } from 'react-native-navigation';
import { startMain } from '~/navigation';

Navigation.events().registerAppLaunchedListener(async () => {
  startMain();
});
