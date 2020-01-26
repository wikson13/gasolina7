/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from './redux/counter/counterActions';
import AddRefuelling from './screens/AddRefuelling';
const App: () => React$Node = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);

  return (
    <>
      <Text>aa</Text>
      <Text>{counter}</Text>
      <Button title="+" onPress={() => dispatch(actions.incrementCounter())} />
      <AddRefuelling />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
