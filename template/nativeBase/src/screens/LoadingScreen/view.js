import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import Overlay from 'react-native-modal-overlay';

const {width, height} = Dimensions.get('window');

const LoadingScreen = (props) => {
  if (props.isOpen) {
    return (
      <Overlay visible containerStyle={styles.root}>
        <ActivityIndicator size="large" />
      </Overlay>
    );
  }
  return null;
}

const styles = {
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    opacity: 0.1,
  }
};

export default LoadingScreen;