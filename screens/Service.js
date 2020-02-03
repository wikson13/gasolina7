import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ButtonClassic from '../components/ButtonClassic';
import ServiceItem from '../components/ServiceItem';
import {useSelector} from 'react-redux';

let list;
const generateServicesList = data => {
  if (!data.refuellings) {
    return null;
  }
  list = [];
  Object.keys(data.services).map(service => {
    list = [...list, {...data.services[service], id: service}];
  });
};

const Service = ({navigation}) => {
  const data = useSelector(state => state.data);
  generateServicesList(data);
  return (
    <View style={styles.container}>
      <>
        <ButtonClassic
          title="Dodaj serwis"
          onPress={() => navigation.navigate('AddService')}
        />
        <FlatList
          data={list}
          renderItem={({item}) => (
            <ServiceItem
              mileage={item.mileage}
              date={item.date}
              amount={item.amount}
              title={item.title}
              description={item.description}
              id={item.id}
              navigation={navigation}
            />
          )}
        />
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
