import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ButtonClassic from '../components/ButtonClassic';
import RefuellingItem from '../components/RefuellingItem';

const Fuel = props => {
  return (
    <View style={styles.container}>
      <ButtonClassic
        title="Dodaj tankowanie"
        onPress={() => console.log(props)}
      />
      <View>
        <RefuellingItem
          date="08.12.2019"
          mileage="100784"
          amount="195.67"
          liters="39.45"
        />
        <RefuellingItem
          date="08.12.2019"
          mileage="100784"
          amount="195.67"
          liters="39.45"
        />
        <RefuellingItem
          date="08.12.2019"
          mileage="100784"
          amount="195.67"
          liters="39.45"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});

export default Fuel;
