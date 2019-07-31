import React, { Fragment, useEffect } from "react";
import { StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const MainScreen = props => {
  const { navigation, isInitialed, isAuth, handleInitialApp } = props;
  useEffect(() => {
    handleInitialApp();
  }, [handleInitialApp]);

  useEffect(() => {
    if  (isInitialed) {
      isAuth ? navigation.navigate("Home") : navigation.navigate("Login");
    }
  }, [isAuth, isInitialed, navigation]);;
  return (
    <Fragment>
      <Image
        style={styles.image}
        source={require("../../assets/images/splash.png")}
      />
    </Fragment>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  image: {
    width,
    height,
  },
});
