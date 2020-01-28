import React, {useState} from 'react';
import {View, Button, Text, TextInput, Switch, ScrollView} from 'react-native';
import InputField from '../components/InputField';
import ButtonClassic from '../components/ButtonClassic';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as dataActions from '../redux/data/dataActions';
import {useDispatch} from 'react-redux';
const AddRefuelling = props => {
  const [mileage, setMileage] = useState('');
  const [date, setDate] = useState('');
  const [liters, setLiters] = useState('');
  const [priceLiter, setPriceLiter] = useState('');
  const [amount, setAmount] = useState('');
  const [showDatepicker, setShowDatepicker] = useState(false);
  const dispatch = useDispatch();
  const dateChangeHandler = (event, date) => {
    console.log(date);
    setShowDatepicker(false);
    setDate(String(date));
  };

  const generateId = () => {
    return new Date().getTime();
  };

  const addRefuellingButtonHandler = () => {
    const refuelling = {
      mileage,
      date,
      liters,
      priceLiter,
      amount,
      id: generateId(),
    };
    dispatch(dataActions.addRefuellingRequest(refuelling));
    props.navigation.navigate('Fuel');
  };

  return (
    <ScrollView>
      <InputField
        title="Przebieg"
        value={mileage}
        onChangeText={text => setMileage(text)}
        keyboardType="number-pad"
      />
      <InputField
        title="Data"
        value={date}
        onChangeText={text => setDate(text)}
      />
      <InputField
        title="Zatankowano"
        value={liters}
        onChangeText={text => setLiters(text)}
        keyboardType="number-pad"
      />
      <InputField
        title="Cena za litr"
        value={priceLiter}
        onChangeText={text => setPriceLiter(text)}
        keyboardType="number-pad"
      />
      <InputField
        title="Zapłacono"
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType="number-pad"
      />

      {/*<Text>Tankowanie do pełna</Text>*/}
      {/*<Switch />*/}
      <ButtonClassic
        title="Dodaj tankowanie"
        onPress={addRefuellingButtonHandler}
      />
      <Button title="date" onPress={() => setShowDatepicker(true)} />
      {showDatepicker && (
        <DateTimePicker
          value={new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={dateChangeHandler}
        />
      )}
    </ScrollView>
  );
};

export default AddRefuelling;
