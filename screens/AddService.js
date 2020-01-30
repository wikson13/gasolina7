import React, {useState} from 'react';
import {View, Button, Text, TextInput, Switch, Keyboard} from 'react-native';
import InputField from '../components/InputField';
import ButtonClassic from '../components/ButtonClassic';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as dataActions from '../redux/data/dataActions';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

const AddService = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mileage, setMileage] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const [showDatepicker, setShowDatepicker] = useState(false);
  const userEmail = useSelector(state => state.auth.userEmail);

  const dispatch = useDispatch();
  const dateChangeHandler = (event, date) => {
    setShowDatepicker(false);

    const formatedDate = moment(date).format('DD.MM.YYYY');
    setDate(formatedDate);
    Keyboard.dismiss();
  };

  const generateId = () => {
    return new Date().getTime();
  };

  const addServiceButtonHandler = () => {
    const service = {
      title,
      description,
      mileage,
      date,
      amount,
      id: generateId(),
      userEmail: userEmail.replace(/\./g, '_'),
    };
    dispatch(dataActions.addServiceRequest(service));
    props.navigation.navigate('Service');
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
        keyboardType="number-pad"
        onFocus={() => setShowDatepicker(true)}
      />
      <InputField
        title="Zapłacono"
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType="number-pad"
      />
      {/*<Text>Tankowanie do pełna</Text>*/}
      {/*<Switch />*/}
      <ButtonClassic title="Dodaj serwis" onPress={addServiceButtonHandler} />
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
