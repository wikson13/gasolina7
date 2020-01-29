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

const generateRefuellingsList = data => {
  return Object.keys(data.refuellings).map(refuelling => {
    return (
      <RefuellingItem
        key={refuelling}
        date={data.refuellings[refuelling].date}
        mileage={data.refuellings[refuelling].mileage}
        amount={data.refuellings[refuelling].amount}
        liters={data.refuellings[refuelling].liters}
      />
    );
  });
};

const Fuel = props => {
  const data = useSelector(state => state.data);
  return (
    <>
      {data.refuellings === undefined ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <>
            <ButtonClassic
              title="Dodaj tankowanie"
              onPress={() => props.navigation.navigate('AddRefuelling')}
            />
            <View>
              {/*<RefuellingItem*/}
              {/*  date="08.12.2019"*/}
              {/*  mileage="100784"*/}
              {/*  amount="195.67"*/}
              {/*  liters="39.45"*/}
              {/*/>*/}

              {generateRefuellingsList(data)}
            </View>
          </>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});

export default Fuel;
