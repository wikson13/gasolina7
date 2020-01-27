import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabNavigation = props => {
  const iconStyle = {
    size: 30,
    color: '#57606f',
  };
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => console.log(props)}>
        <Icon
          name="gas-station"
          size={iconStyle.size}
          color={iconStyle.color}
        />
        <Text style={styles.navItemText}>Paliwo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="wrench" size={iconStyle.size} color={iconStyle.color} />
        <Text style={styles.navItemText}>Serwis</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Icon
          name="chart-areaspline"
          size={iconStyle.size}
          color={iconStyle.color}
        />
        <Text style={styles.navItemText}>Statystyki</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navItemText: {
    textAlign: 'center',
    color: '#57606f',
    fontSize: 15,
  },
});

export default TabNavigation;
