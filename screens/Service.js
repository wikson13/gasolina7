import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonClassic from '../components/ButtonClassic';
import ServiceItem from '../components/ServiceItem';
const Service = props => {
  return (
    <View style={styles.container}>
      <>
        <ButtonClassic
          title="Dodaj serwis"
          onPress={() => props.navigation.navigate('AddService')}
        />
        <ServiceItem />

        <View>{/*{generateRefuellingsList(data)}*/}</View>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});

export default Service;
