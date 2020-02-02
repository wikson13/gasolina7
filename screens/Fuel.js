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
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';

const generateRefuellingsList = (data, navigation) => {
  if (!data.refuellings) {
    return null;
  }
  return Object.keys(data.refuellings).map(refuelling => {
    return (
      <RefuellingItem
        key={refuelling}
        date={data.refuellings[refuelling].date}
        mileage={data.refuellings[refuelling].mileage}
        amount={data.refuellings[refuelling].amount}
        liters={data.refuellings[refuelling].liters}
        priceLiter={data.refuellings[refuelling].priceLiter}
        fullRefuelling={data.refuellings[refuelling].fullRefuelling}
        id={refuelling}
        navigation={navigation}
      />
    );
  });
};

const Fuel = ({navigation}) => {
  const data = useSelector(state => state.data);
  return (
    <>
      <View style={styles.container}>
        <>
          <ButtonClassic
            title="Dodaj tankowanie"
            onPress={() => navigation.navigate('AddRefuelling')}
          />
          <View>{generateRefuellingsList(data, navigation)}</View>
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});

export default Fuel;
