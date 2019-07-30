import React, {Fragment} from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const MainScreen = () => (
  <Fragment>
    <Image
      style={styles.image}
      source={require('../../assets/images/splash.png')}
    />
  </Fragment>
);

export default MainScreen;

const styles = StyleSheet.create({
  image: {
    width,
    height
  }
});
