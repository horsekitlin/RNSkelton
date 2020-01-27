import React, { useEffect, useState } from 'react';
import isNull from 'lodash/isNull';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import ConfirmCodeInput from './ConfirmCodeInput';

const LoginScreen = props => {
  const { navigation, isAuth, confirmation } = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const confirmationIsNull = isNull(confirmation);

  useEffect(() => {
    if (isAuth) navigation.navigate('Home');
  }, [isAuth]);

  const handleLogin = () => {
    if(confirmationIsNull) {
      const payload = {
        phoneNumber
      };
      props.handleGetConfirmationCode(payload);
    } else {
      const loginPayload = {
        code,
        confirmation,
      };
      props.handleLogin(loginPayload);
    }
  }

  return (
    <View style={styles.container}>
      <Avatar rounded size="large" title="MD" />
      <Input
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputContainerStyle}
        placeholder="Phone Number"
        leftIcon={<Icon name="user" size={24} color="black" />}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <ConfirmCodeInput
        hide={isNull(confirmation)}
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputContainerStyle}
        placeholder="Verification Code"
        leftIcon={<Icon name="lock" size={24} color="black" />}
        onChangeText={text => setCode(text)}
        value={code}
      />
      <Button
        buttonStyle={styles.button}
        title="Login"
        onPress={handleLogin}
      />
      <Button
        type="clear"
        buttonStyle={styles.button}
        title="Register"
        onPress={() => Actions.register()}
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
  inputContainerStyle: { borderBottomWidth: 0 },
  inputContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    margin: 10,
  },
  button: { width: 300, borderRadius: 25, margin: 5 }
});
export default LoginScreen;
