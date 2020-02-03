import React from 'react';
import {Button, TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';
import InputField from './InputField';

const ButtonClassic = ({style, onPress, title}) => {
  return (
    <TouchableOpacity
      style={{...styles.buttonClassic, ...style}}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
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
    fontFamily: 'Montserrat-Bold',
  },
});

export default ButtonClassic;
