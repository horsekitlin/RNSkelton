import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Button from '~/components/Button';
import TextInput from '~/components/TextInput';
import { theme } from '~/constants/core/theme';
import { phoneRegExp } from '~/utils/emailValidator';
import { passwordSchema } from '~/utils/passwordValidator';
import { validate } from '~/utils/yupHelper';

const signupSchema = yup.object().shape({
  phone: yup.string().required('phone not be empty.').matches(phoneRegExp, 'phone format fail.'),
  name: yup.string().required('name not be empty.'),
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref('password'), null], "Passwords don't match.")
});

export default function SignupScreen(props) {
  const [state, setState] = useState({
    phone: '',
    name: '',
    password: '',
    confirmPassword: '',
    errors: {},
  });

  const onSignUpPressed = () => {
    const validation = validate(signupSchema, state);
    if (validation.isValid) {
      props.handleSignup({
        phone: state.phone,
        name: state.name,
        password: state.password,
        onSuccess: () => props.navigation.navigate("Login"),
      });
      setState({...state, errors: {}});
      return;
    }
    setState({...state, errors: validation.errors});
  };

  return (
    <Background containerStyle={styles.containerStyle}>
      <Header>Create Account</Header>
      <TextInput
        label="Phone"
        returnKeyType="next"
        keyboardType="numeric"
        value={state.phone}
        onChangeText={(text) => setState({ ...state, phone: text })}
        error={!isEmpty(state.errors.phone)}
        errorText={state.errors.phone}
      />
      <TextInput
        label="Name"
        returnKeyType="next"
        value={state.name}
        onChangeText={(text) => setState({ ...state, name: text })}
        error={!isEmpty(state.errors.name)}
        errorText={state.errors.name}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        returnKeyType="next"
        value={state.password}
        onChangeText={(text) => setState({ ...state, password: text })}
        error={!isEmpty(state.errors.password)}
        errorText={state.errors.password}
        secureTextEntry
      />
      <TextInput
        label="ConfirmPassword"
        returnKeyType="done"
        value={state.confirmPassword}
        onChangeText={(text) => setState({ ...state, confirmPassword: text })}
        error={!isEmpty(state.errors.confirmPassword)}
        errorText={state.errors.confirmPassword}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}>
        Sign Up
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  containerStyle: { justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
