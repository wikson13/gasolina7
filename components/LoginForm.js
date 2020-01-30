import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import InputField from './InputField';
import ButtonClassic from './ButtonClassic';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../redux/auth/authActions';
import * as dataActions from '../redux/data/dataActions';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.err);
  const [isLogin, setIsLogin] = useState(true);
  const loginButtonHandler = () => {
    const userData = {
      email,
      password,
      isLogin,
    };
    dispatch(authActions.authRequest(userData));
  };

  return (
    <View>
      <Text style={styles.title}>{isLogin ? 'SIGN IN' : 'SIGN UP'}</Text>
      <InputField
        title="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputField
        title="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        errorMsg={error && error.message}
      />
      <ButtonClassic
        title={!isLogin ? 'sign up' : 'sign in'}
        onPress={loginButtonHandler}
      />
      <ButtonClassic
        title={isLogin ? 'Switch to sign up' : 'Switch to sign in'}
        onPress={() => setIsLogin(!isLogin)}
        style={{backgroundColor: '#ff6348'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
  },
});

export default LoginForm;
