import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import InputField from './InputField';
import ButtonClassic from './ButtonClassic';
import {useDispatch} from 'react-redux';
import * as authActions from '../redux/auth/authActions';
import * as dataActions from '../redux/data/dataActions';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginButtonHandler = () => {
    // alert(`${email}-${password}`);
    dispatch(authActions.authRequest(email, password, false));
    console.log('a');
  };

  return (
    <View>
      <InputField
        title="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputField
        title="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <ButtonClassic title="Sign in" onPress={loginButtonHandler} />
    </View>
  );
};

export default LoginForm;
