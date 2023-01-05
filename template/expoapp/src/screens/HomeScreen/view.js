import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '~/components/Background';
import Logo from '~/components/Logo';
import Header from '~/components/Header';
import {theme} from '~/constants/core/theme';

export default function HomeScreen() {

  return (
    <Background>
      <Logo />
      <Header>Home Screen .</Header>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
