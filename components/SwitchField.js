import React from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';

const SwitchField = ({title, value, onValueChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
});
export default SwitchField;
