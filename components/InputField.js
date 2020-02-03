import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const InputField = props => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        onFocus={props.onFocus}
      />
      {props.errorMsg && <Text style={styles.errorMsg}>{props.errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#959595',
    padding: 0,
  },
  fieldContainer: {
    margin: 10,
  },
  errorMsg: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
});

export default InputField;
