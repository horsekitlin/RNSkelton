import React from 'react';
import {ImageBackground, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {theme} from '~/constants/core/theme';

export default function Background({children, containerStyle = {}}) {
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={[styles.container, containerStyle]} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
  },
});
