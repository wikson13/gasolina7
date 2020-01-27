import React, {useState} from 'react';
import {View, Button, Text, TextInput, Switch} from 'react-native';
import InputField from '../components/InputField';
import ButtonClassic from '../components/ButtonClassic';
import DateTimePicker from '@react-native-community/datetimepicker';
const AddRefuelling = () => {
  const [mileage, setMileage] = useState('');
  const [date, setDate] = useState('');
  const [liters, setLiters] = useState('');
  const [priceLiter, setPriceLiter] = useState('');
  const [amount, setAmount] = useState('');

  const [showDatepicker, setShowDatepicker] = useState(false);

  const dateChangeHandler = (event, date) => {
    console.log(date);
    setShowDatepicker(false);
    setDate(String(date));
  };

  return (
    <View>
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
        onChangeText={text => setLiter(text)}
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
      <ButtonClassic title="Dodaj tankowanie" />
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
    </View>
  );
};

export default AddRefuelling;
