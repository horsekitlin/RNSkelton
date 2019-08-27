import React, { Fragment, useState, useEffect, useContext } from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { ReducerContext } from '../../reducers';
import {AppRoutes, LoginRoutes} from './Routes';
import initialPromise from './actionPromises/initialPromises';
const { width, height } = Dimensions.get("window");

const MainScreen = props => {
  const [isInitialApp, setIsInitialApp] = useState(false);
  const [{auth}] = useContext(ReducerContext);

  useEffect(() => {
    initialPromise(setIsInitialApp);
  }, [setIsInitialApp]);

  if(!isInitialApp) {
    return (
      <Fragment>
        <Image
          style={styles.image}
          source={require("../../assets/images/splash.png")}
        />
      </Fragment>
    );
  }

  return auth.isAuth
    ? <AppRoutes />
    : <LoginRoutes />;
};

export default MainScreen;

const styles = StyleSheet.create({
  image: {
    width,
    height,
  },
});
