// In index.js of a new project
import { Navigation } from 'react-native-navigation';
import { startMain } from '~/navigation';
import messaging from '@react-native-firebase/messaging';
import { prepareIcons } from './navigation/icons';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    return;
  }
}

Navigation.events().registerAppLaunchedListener(async () => {
  // prepare service
  // await firebase.initializeApp({}, config);

  await Promise.all([
    prepareIcons(),
    requestUserPermission()
  ]);

  startMain();
});
