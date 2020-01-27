import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const RefuellingItem = props => {
  const iconStyle = {
    size: 20,
    color: '#97a0af',
  };

  return (
    <View style={styles.refuellingItem}>
      <View style={styles.consumptionBox}>
        <Text style={styles.consumption}>7.83</Text>
        <Text style={styles.unit}>l/100km</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.column}>
          <View style={styles.valueBox}>
            <Icon
              name="calendar-today"
              size={iconStyle.size}
              color={iconStyle.color}
            />
            <Text style={styles.value}>{props.date}</Text>
          </View>
          <View style={styles.valueBox}>
            <Icon
              name="speedometer"
              size={iconStyle.size}
              color={iconStyle.color}
            />
            <Text style={styles.value}>{props.mileage}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.valueBox}>
            <Icon
              name="credit-card"
              size={iconStyle.size}
              color={iconStyle.color}
            />
            <Text style={styles.value}>{props.amount}</Text>
          </View>
          <View style={styles.valueBox}>
            <Icon
              name="gas-station"
              size={iconStyle.size}
              color={iconStyle.color}
            />
            <Text style={styles.value}>{props.liters}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.infoButton}>
        <Icon name="information-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  refuellingItem: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 2,
    flexDirection: 'row',
  },
  consumptionBox: {
    backgroundColor: colors.primaryColor,
    padding: 3,
    textAlign: 'center',
  },
  consumption: {
    fontSize: 25,
    textAlign: 'center',
  },
  unit: {
    fontSize: 8,
    textAlign: 'center',
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoButton: {
    backgroundColor: colors.primaryColor,
    padding: 10,
  },
  value: {
    color: '#7f8897',
    fontSize: 15,
    marginLeft: 2,
  },
  valueBox: {
    flexDirection: 'row',
  },
});

export default RefuellingItem;
