import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';

const LoginScreen = props => {
  const { navigation, isAuth } = props;
  useEffect(() => {
    if (isAuth) navigation.navigate('Home');
  }, [isAuth]);

  const handleLogin = () => props.handleLogin();

  return (
    <View style={styles.container}>
      <Avatar rounded size="large" title="MD" />
      <Input
        containerStyle={styles.inputContainer}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Button
        buttonStyle={{ width: 300, borderRadius: 25 }}
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    margin: 10,
  },
});
export default LoginScreen;
