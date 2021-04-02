import commonColor from '~/native-base-theme/variables/commonColor';

export const LOGIN_COMPONENT = {
  name: 'Login',
  options: {
    topBar: {
      rightButtons: [
        {
          id: 'LOGIN_CLOSE',
          text: '關閉',
          color: commonColor.white,
        },
      ],
      background: {
        color: commonColor.brandPrimary,
      },
      title: {
        color: commonColor.white,
        text: '登入',
        fontSize: 22,
        alignment: 'center',
      },
    },
  },
};

export const REGISTER_COMPONENT = {
  name: 'Register',
  options: {
    topBar: {
      rightButtons: [
        {
          id: 'REGISTER_CLOSE',
          text: '關閉',
          color: commonColor.white,
        },
      ],
      background: {
        color: commonColor.brandPrimary,
      },
      title: {
        color: commonColor.white,
        text: '會員註冊',
        fontSize: 22,
        alignment: 'center',
      },
    },
  },
};

export const HOME_COMPONENT = {
  name: 'Home',
  options: {
    topBar: {
      rightButtons: [
        {
          id: 'HomeLeftButton',
          icon: require('~/assets/images/notifications.png'),
        },
      ],
      leftButtons: [
        {
          id: 'HomeRightButton',
          icon: require('~/assets/images/rightIcon.jpg'),
        },
      ],
      background: {
        color: commonColor.brandPrimary,
      },
    },
  },
};

export const CLEAN_REGULARLY_COMPONENT = {
  name: 'CleanRegularly',
  options: {
    topBar: {
      background: {
        color: commonColor.brandPrimary,
      },
      leftButtonColor: commonColor.white,
      title: {
        color: commonColor.white,
        text: '定期清潔',
        alignment: 'center',
      },
    },
  },
};

export const APPOINTMENT_SERVICE_COMPONENT = {
  name: 'Setting',
  options: {
    topBar: {
      background: {
        color: commonColor.brandPrimary,
      },
      title: {
        color: commonColor.white,
        text: '預約服務',
        alignment: 'center',
      },
    },
  },
};

export const BILL_COMPONENT = {
  name: 'Setting',
  options: {
    topBar: {
      background: {
        color: commonColor.brandPrimary,
      },
      title: {
        color: commonColor.white,
        text: '我的訂單',
        alignment: 'center',
      },
    },
  },
};

export const USER_COMPONENT = {
  name: 'Setting',
  options: {
    topBar: {
      background: {
        color: commonColor.brandPrimary,
      },
      title: {
        color: commonColor.white,
        text: '會員中心',
        alignment: 'center',
      },
    },
  },
};
