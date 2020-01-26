import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const InputField = props => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#959595',
    padding: 0,
  },
  fieldContainer: {
    margin: 10,
  },
});

export default InputField;
