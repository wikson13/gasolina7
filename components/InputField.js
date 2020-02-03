import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const InputField = ({
  value,
  onChangeText,
  keyboardType,
  onFocus,
  errorMsg,
  title,
}) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onFocus={onFocus}
      />
      {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}
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
    fontFamily: 'Montserrat-Light',
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
