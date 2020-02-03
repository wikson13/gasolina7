import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatsMiniBox = ({title, data, iconName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon}>
        <Icon name={iconName} size={30} color="#444" />
      </View>
      <Text style={styles.data}>{data} zł</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 5,
    flex: 1,
    padding: 8,
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  data: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',

    fontSize: 20,
  },
  icon: {
    alignItems: 'center',
    margin: 8,
  },
});

export default StatsMiniBox;
