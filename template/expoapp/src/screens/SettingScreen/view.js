import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '~/components/Background';

export default function SettingScreen() {  
  return (
    <Background>
      <View style={styles.row}>
        <Text>Setting Screen</Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});
