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
import {StyleSheet, Text, Button, View, SafeAreaView} from 'react-native';

import AppNavigation from './navigation/AppNavigation';
// import {getDataRequest} from './redux/data/dataActions';

const App: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
});

export default App;
