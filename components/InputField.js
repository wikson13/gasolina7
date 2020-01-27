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
      />
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
