import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonClassic from '../components/ButtonClassic';
import ServiceItem from '../components/ServiceItem';
import RefuellingItem from '../components/RefuellingItem';
import {useSelector} from 'react-redux';

const generateServicesList = data => {
  if (!data.services) {
    return null;
  }
  return Object.keys(data.services).map(service => {
    return (
      <ServiceItem
        key={service}
        date={data.services[service].date}
        mileage={data.services[service].mileage}
        amount={data.services[service].amount}
        title={data.services[service].title}
        description={data.services[service].description}
        id={service}
      />
    );
  });
};

const Service = props => {
  const data = useSelector(state => state.data);

  return (
    <View style={styles.container}>
      <>
        <ButtonClassic
          title="Dodaj serwis"
          onPress={() => props.navigation.navigate('AddService')}
        />
        <View>{generateServicesList(data)}</View>
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
