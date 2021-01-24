import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" />
    </View>
  );
}

LoadingScreen.options = (props) => {
  return {
    layout: {
      componentBackgroundColor: 'rgba(0,0,0,0.2)',
    },
  };
};

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    opacity: 1,
  }
};

export default LoadingScreen;