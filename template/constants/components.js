import commonColor from '~/native-base-theme/variables/commonColor';

export const HOME_COMPONENT = {
  name: 'Home',
  options: {
    topBar: {
      // rightButtons: [
      //   {
      //     id: 'HomeLeftButton',
      //     icon: require('~/assets/images/notifications.png'),
      //   },
      // ],
      // leftButtons: [
      //   {
      //     id: 'HomeRightButton',
      //     icon: require('~/assets/images/rightIcon.jpg'),
      //   },
      // ],
      background: {
        color: commonColor.brandPrimary,
      },
    },
  },
};

export const SETTING_COMPONENT = {
  name: 'Setting',
  options: {
    topBar: {
      background: {
        color: commonColor.brandPrimary,
      },
      leftButtonColor: commonColor.white,
      title: {
        color: commonColor.white,
        text: '設定',
        alignment: 'center',
      },
    },
  },
};
