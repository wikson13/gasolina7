/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// https://github.com/react-native-community/react-native-datetimepicker
//https://materialdesignicons.com/

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as counterActions from './redux/counter/counterActions';
import * as dataActions from './redux/data/dataActions';
import AddRefuelling from './screens/AddRefuelling';
import LoginForm from './components/LoginForm';
import * as authActions from './redux/auth/authActions';
import AddService from './screens/AddService';
import Fuel from './screens/Fuel';
import AppNavigation from './navigation/AppNavigation';
import TabNavigation from './components/TabNavigation';
import TopBar from './components/TopBar';
import Loading from './components/Loading';
import ButtonClassic from './components/ButtonClassic';
// import {getDataRequest} from './redux/data/dataActions';
import AsyncStorage from '@react-native-community/async-storage';

const App: () => React$Node = props => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const userId = useSelector(state => state.auth.userId);
  const authLoading = useSelector(state => state.auth.loading);
  useEffect(() => {
    // dispatch(dataActions.getDataRequest());
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        console.log('AUTH');
        return;
      }
      const transformedData = JSON.parse(userData);
      const {token, userId, expiryDate} = transformedData;
      const expirationDate = new Date(expiryDate);
      if (expirationDate <= new Date() || !token || !userId) {
        console.log('AUTH');
        return;
      }
      console.log('APP');
    };
    tryLogin();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {authLoading ? <Loading /> : 1 ? <AppNavigation /> : <LoginForm />}
        {/*{authLoading ? <Loading /> : userId ? <AppNavigation /> : <LoginForm />}*/}
        {/*{userId ? <AppNavigation /> : <LoginForm />}*/}
        <ButtonClassic
          title="logout"
          onPress={() => dispatch(authActions.authLogout())}
        />
        {/*<AppNavigation />*/}
        {/*<LoginForm />*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  topBar: {},
  content: {
    flex: 1,
  },
  tabNav: {},
});

export default App;
