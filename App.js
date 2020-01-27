/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// https://github.com/react-native-community/react-native-datetimepicker
//https://materialdesignicons.com/

import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as counterActions from './redux/counter/counterActions';
import * as dataActions from './redux/data/dataActions';
import AddRefuelling from './screens/AddRefuelling';
import LoginForm from './components/LoginForm';
import AddService from './screens/addService';
import Fuel from './screens/Fuel';
import AppNavigation from './navigation/AppNavigation';
import TabNavigation from './components/TabNavigation';
import TopBar from './components/TopBar';

const App: () => React$Node = props => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar />
      </View>
      <View style={styles.content}>
        <AppNavigation />
      </View>
      <View style={styles.tabNav}>
        <TabNavigation {...props} />
      </View>

      {/*<Text>{counter}</Text>*/}
      {/*<Button*/}
      {/*  title="+"*/}
      {/*  onPress={() => dispatch(counterActions.incrementCounter())}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  title="+a"*/}
      {/*  onPress={() => dispatch(counterActions.asyncIncrementCounter())}*/}
      {/*/>*/}
      {/*<AddRefuelling />*/}
      {/*<Button*/}
      {/*  title="get data"*/}
      {/*  onPress={() => dispatch(dataActions.getDataRequest())}*/}
      {/*/>*/}
      {/*<LoginForm />*/}
      {/*<AddService />*/}
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
