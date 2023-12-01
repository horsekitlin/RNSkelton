import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Background from '~/components/Background';
import { Avatar } from 'react-native-paper';

const SettingScreen = (props) => {
  return (
    <Background>
      <View style={styles.row}>
        <Avatar.Icon size={120} icon="account-circle" />
      </View>
      <View style={styles.row}>
        <Text>暱稱: {props.user.name}</Text>
      </View>
      <View style={styles.row}>
        <Text>電話: {props.user.phone}</Text>
      </View>
      <View style={styles.row}>
        <Button mode="contained" onPress={props.handleSignOut}>
          登出
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default SettingScreen;
