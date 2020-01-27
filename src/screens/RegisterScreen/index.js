import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const RegisterScreen = props => {
  const { navigation, isAuth } = props;

  const handleLogin = () => props.handleLogin();

  return (
    <View style={styles.container}>
      <Avatar rounded size="large" title="MD" />
      <Input
        containerStyle={styles.inputContainer}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        placeholder="Phone Number"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Button
        buttonStyle={styles.button}
        title="Register"
        onPress={handleLogin}
      />
      <Button
        type="clear"
        buttonStyle={styles.button}
        title="Cancel"
        onPress={Actions.pop}
      />
    </View>
  );
};

RegisterScreen.navigationOptions = {
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
  button: { width: 300, borderRadius: 25, margin: 5 }
});
export default RegisterScreen;
