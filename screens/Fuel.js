import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ButtonClassic from '../components/ButtonClassic';
import RefuellingItem from '../components/RefuellingItem';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
let list;
const generateRefuellingsList = (data, navigation) => {
  if (!data.refuellings) {
    return null;
  }
  list = [];
  Object.keys(data.refuellings).map(refuelling => {
    list = [...list, {...data.refuellings[refuelling], id: refuelling}];
  });
};

const Fuel = ({navigation}) => {
  const data = useSelector(state => state.data);
  generateRefuellingsList(data, navigation);
  return (
    <>
      <View style={styles.container}>
        <>
          <ButtonClassic
            title="Dodaj tankowanie"
            onPress={() => navigation.navigate('AddRefuelling')}
          />
          <FlatList
            style={styles.listContainer}
            data={list}
            renderItem={({item}) => (
              <RefuellingItem
                mileage={item.mileage}
                date={item.date}
                amount={item.amount}
                liters={item.liters}
                avg={item.avg}
                priceLiter={item.priceLiter}
                fullRefuelling={item.fullRefuelling}
                id={item.id}
                navigation={navigation}
              />
            )}
          />
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Fuel;
