import {Navigation} from 'react-native-navigation';
import {
  CLEAN_REGULARLY_COMPONENT,
  LOGIN_COMPONENT,
  REGISTER_COMPONENT,
} from '~/constants/components';

export const showRegisterModal = () => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: REGISTER_COMPONENT,
        },
      ],
    },
  });
};

export const showLoginModal = () => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: LOGIN_COMPONENT,
        },
      ],
    },
  });
};

export const showAlertModal = (title, message) => {
  Navigation.showOverlay({
    component: {
      layout: {
        componentBackgroundColor: 'transparent',
      },
      overlay: {
        interceptTouchOutside: true,
      },
      name: 'Dialog',
      passProps: {
        message,
        title,
      },
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  });
};

export const showLoading = () => {
  Navigation.showOverlay({
    component: {
      id: 'LOADING_SCREEN',
      name: 'Loading',
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  });
};

export const pushCleanRegularly = (componentId) => () =>
  Navigation.push(componentId, {component: CLEAN_REGULARLY_COMPONENT});
