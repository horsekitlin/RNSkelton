import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import * as yup from 'yup';
import { StyleSheet } from 'react-native';
import Background from '~/components/Background';
import Button from '~/components/Button';
import TextInput from '~/components/TextInput';
import { validate } from '~/utils/yupHelper';
import { phoneRegExp } from '~/utils/emailValidator';
import { passwordSchema } from '~/utils/passwordValidator';

const signinSchema = yup.object().shape({
  phone: yup.string().required('phone not be empty.').matches(phoneRegExp, 'phone format fail.'),
  password: passwordSchema,
});

export default function LoginScreen(props) {
  const [state, setState] = useState({
    phone: '',
    password: '',
    errors: {},
  });

  const { handleSignIn } = props;
  const onLoginPressed = () => {
    const validation = validate(signinSchema, state);

    if (validation.isValid) {
      handleSignIn({
        phone: state.phone,
        password: state.password,
        message: '登入成功',
      });
      setState({...state, errors: {}});
      return;
    }
    setState({...state, errors: validation.errors});
  };

  return (
    <Background containerStyle={styles.containerStyle}>
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={state.phone}
        onChangeText={(text) => setState({ ...state, phone: text })}
        error={!isEmpty(state.errors.phone)}
        errorText={state.errors.phone}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={state.password}
        onChangeText={(text) => setState({ ...state, password: text })}
        error={!isEmpty(state.errors.password)}
        errorText={state.errors.password}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        登入
      </Button>
      <Button mode="contained" onPress={() => props.navigation.navigate('Signup')}>
        註冊
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  containerStyle: { justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 },
});
