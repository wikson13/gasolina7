import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Picker selectedValue={'toyota'} style={styles.picker}>
        <Picker.Item label="Toyota Yaris" value="toyota" />
        <Picker.Item label="Ford Focus" value="ford" />
        <Picker.Item label="Opel astra" value="ford" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: 160,
  },
});

export default TopBar;
