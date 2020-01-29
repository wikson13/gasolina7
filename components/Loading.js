import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import colors from '../constants/colors';
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={60} color={colors.primaryColor} />
      {/*<Text>Loading...</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Loading;
