
export const LOGIN_COMPONENT = {
  name: 'Login',
  options: {
    topBar: {
      rightButtons: [
        {
          id: 'LOGIN_CLOSE',
          text: '關閉',
          color: '#FFFFFF',
        },
      ],
      title: {
        color: '#FFFFFF',
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
          color: '#FFFFFF',
        },
      ],
      title: {
        color: '#FFFFFF',
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
    },
  },
};

export const CLEAN_REGULARLY_COMPONENT = {
  name: 'CleanRegularly',
  options: {
    topBar: {
      leftButtonColor: '#FFFFFF',
      title: {
        color: '#FFFFFF',
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
      title: {
        color: '#FFFFFF',
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
      title: {
        color: '#FFFFFF',
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
      title: {
        color: '#FFFFFF',
        text: '會員中心',
        alignment: 'center',
      },
    },
  },
};
