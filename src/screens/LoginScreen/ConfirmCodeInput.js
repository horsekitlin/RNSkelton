import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

const ConfirmCodeInput = ({ hide, ...props }) => {
  if (hide) return <View />
  return (<Input {...props} />);
};

export default ConfirmCodeInput;
