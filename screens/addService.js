import React, {useState} from 'react';
import {View, Button, Text, TextInput, Switch} from 'react-native';
import InputField from '../components/InputField';
import ButtonClassic from '../components/ButtonClassic';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddService = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mileage, setMileage] = useState('');
  const [date, setDate] = useState('');
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
        title="Tytuł"
        value={title}
        onChangeText={text => setTitle(text)}
        keyboardType="default"
      />
      <InputField
        title="Opis"
        value={description}
        onChangeText={text => setDescription(text)}
        keyboardType="default"
      />
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
      <ButtonClassic title="Dodaj serwis" />
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

export default AddService;
