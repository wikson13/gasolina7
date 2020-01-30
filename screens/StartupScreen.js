import React, {useEffect} from 'react';
import {View} from 'react-native';
import Loading from '../components/Loading';
import * as dataActions from '../redux/data/dataActions';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../redux/auth/authActions';
const StartupScreen = props => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  useEffect(() => {
    AsyncStorage.getItem('userData').then(res => console.log(res));
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        props.navigation.navigate('Auth');
        return;
      }
      const transformedData = JSON.parse(userData);
      const {token, userId, expiryDate, email} = transformedData;
      const expirationDate = new Date(expiryDate);
      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.navigate('Auth');
        return;
      }
      props.navigation.navigate('Fuel');
      dispatch(authActions.authenticate(userId, token, email));
      dispatch(dataActions.getDataRequest());
    };
    tryLogin();
  }, [userId]);

  return (
    <View>
      <Loading />
    </View>
  );
};

export default StartupScreen;
