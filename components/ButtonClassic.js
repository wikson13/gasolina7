import React from 'react';
import {Button, TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';
import InputField from './InputField';

const ButtonClassic = props => {
  return (
    <TouchableOpacity
      style={{...styles.buttonClassic, ...props.style}}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonClassic: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    // fontFamily: 'Montserrat-Bold',
  },
});

export default ButtonClassic;
