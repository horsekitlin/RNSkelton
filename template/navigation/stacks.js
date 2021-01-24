import commonColor from '~/native-base-theme/variables/commonColor';
import { HOME_COMPONENT, SETTING_COMPONENT } from '~/constants/components';

const getBottomTabConfigure = (options) => ({
  backgroundColor: commonColor.brandPrimary,
  textColor: commonColor.white,
  selectedTextColor: commonColor.white,
  ...options,
});

export const getHomeStack = (icon, selectedIcon) => {
  return {
    children: [
      {
        component: {
          ...HOME_COMPONENT,
          options: {
            ...HOME_COMPONENT.options,
            bottomTab: getBottomTabConfigure({ text: '首頁', icon, selectedIcon }),
          }
        },
      },
    ],
  }
};

export const getSettingStack = (icon, selectedIcon) => {
  return {
    children: [
      {
        component: {
          ...SETTING_COMPONENT,
          options: {
            ...SETTING_COMPONENT.options,        
            bottomTab: getBottomTabConfigure({ text: '設定', icon, selectedIcon }),
          }
        }
      },
    ],
  };
};
