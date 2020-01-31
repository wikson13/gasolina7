import React, {useState} from 'react';
import {View, Button, Text, TextInput, Switch, Keyboard} from 'react-native';
import InputField from '../components/InputField';
import ButtonClassic from '../components/ButtonClassic';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as dataActions from '../redux/data/dataActions';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

const AddService = props => {
  let editService = null;
  if (props.navigation.state.params) {
    editService = props.navigation.state.params;
  }
  const [title, setTitle] = useState(
    editService === null ? '' : editService.title,
  );
  const [description, setDescription] = useState(
    editService === null ? '' : editService.description,
  );
  const [mileage, setMileage] = useState(
    editService === null ? '' : editService.mileage,
  );
  const [date, setDate] = useState(
    editService === null ? '' : editService.date,
  );
  const [amount, setAmount] = useState(
    editService === null ? '' : editService.amount,
  );

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
      id: editService === null ? generateId() : editService.id,
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
      <ButtonClassic
        title={editService === null ? 'Dodaj serwis' : 'Zapisz serwis'}
        onPress={addServiceButtonHandler}
      />
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
