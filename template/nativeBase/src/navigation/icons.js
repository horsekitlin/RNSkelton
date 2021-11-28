
import Icon from 'react-native-vector-icons/FontAwesome';

let icons = {};

const setIcons = (result) => icons = result;

export const prepareIcons = async () => {
  const [
    homeIcon,
    selectedHomeIcon,
    settingIcon,
    selectedSettingIcon,
    billIcon,
    selectedBillIcon,
    userIcon,
    selectedUserIcon,
  ] = await Promise.all([
    Icon.getImageSource('home', 20, '#FFFFFF'),
    Icon.getImageSource('home', 20, '#FFFFFF'),
    Icon.getImageSource('file-text', 20, '#FFFFFF'),
    Icon.getImageSource('file-text', 20, '#FFFFFF'),
    Icon.getImageSource('calendar-o', 20, '#FFFFFF'),
    Icon.getImageSource('calendar-o', 20, '#FFFFFF'),
    Icon.getImageSource('user-circle', 20, '#FFFFFF'),
    Icon.getImageSource('user-circle', 20, '#FFFFFF'),
  ]);

  setIcons({
    homeIcon,
    selectedHomeIcon,
    settingIcon,
    selectedSettingIcon,
    billIcon,
    selectedBillIcon,
    userIcon,
    selectedUserIcon,
  });
};

export const getIcons = () => icons;
