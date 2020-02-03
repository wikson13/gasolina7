import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';

const StatsMiniBox = ({title, data, iconName, unit}) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.primaryColor, 'rgba(255,207,34,0.83)']}
      start={{x: 0.0, y: 0.0}}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon}>
        <Icon name={iconName} size={30} color="#444" />
      </View>
      <Text style={styles.data}>
        {data} {unit}
      </Text>
    </LinearGradient>
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
