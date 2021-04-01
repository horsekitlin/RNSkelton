
import Icon from 'react-native-vector-icons/FontAwesome';
import commonColor from '~/native-base-theme/variables/commonColor';

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
    Icon.getImageSource('home', 20, commonColor.white),
    Icon.getImageSource('home', 20, commonColor.white),
    Icon.getImageSource('file-text', 20, commonColor.white),
    Icon.getImageSource('file-text', 20, commonColor.white),
    Icon.getImageSource('calendar-o', 20, commonColor.white),
    Icon.getImageSource('calendar-o', 20, commonColor.white),
    Icon.getImageSource('user-circle', 20, commonColor.white),
    Icon.getImageSource('user-circle', 20, commonColor.white),
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
