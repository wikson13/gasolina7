import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  Switch,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import InputField from '../components/InputField';
import ButtonClassic from '../components/ButtonClassic';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as dataActions from '../redux/data/dataActions';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

const AddRefuelling = props => {
  let editRefuelling = null;
  if (props.navigation.state.params) {
    editRefuelling = props.navigation.state.params;
  }
  const [mileage, setMileage] = useState(
    editRefuelling === null ? '' : editRefuelling.mileage,
  );
  const [date, setDate] = useState(
    editRefuelling === null ? '' : editRefuelling.date,
  );
  const [liters, setLiters] = useState(
    editRefuelling === null ? '' : editRefuelling.liters,
  );
  const [priceLiter, setPriceLiter] = useState(
    editRefuelling === null ? '' : editRefuelling.priceLiter,
  );
  const [amount, setAmount] = useState(
    editRefuelling === null ? '' : editRefuelling.amount,
  );
  const [showDatepicker, setShowDatepicker] = useState(false);

  const [mileageErr, setMileageErr] = useState(null);
  const [litersErr, setLitersErr] = useState(null);

  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.userEmail);
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
      id: editRefuelling === null ? generateId() : editRefuelling.id,

      userEmail: userEmail.replace(/\./g, '_'),
    };
    dispatch(dataActions.addRefuellingRequest(refuelling));
    props.navigation.navigate('Fuel');
  };

  const mileageInputHandler = text => {
    if (text.trim().length <= 0) {
      setMileageErr('To pole jest wymagane');
    } else if (!/^\d+$/.test(text)) {
      setMileageErr('Wpisano nieprawidłową wartość');
    } else {
      setMileageErr(null);
    }
    setMileage(text);
  };

  const dateInputHandler = () => {
    setShowDatepicker(true);
    Keyboard.dismiss();
  };

  const dateChangeHandler = (event, date) => {
    setShowDatepicker(false);

    const formatedDate = moment(date).format('DD.MM.YYYY');
    setDate(formatedDate);
    Keyboard.dismiss();
  };

  const litersInputHandler = text => {
    if (text.trim().length <= 0) {
      setLitersErr('To pole jest wymagane');
    } else if (!/^[+]?([0-9]{1,4})[.,]{0,1}([0-9]{0,3})?$/.test(text)) {
      setLitersErr('Wpisano nieprawidłową wartość');
    } else {
      setLitersErr(null);
    }
    setLiters(text);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={15}
      behavior="marginrr"
      style={{flex: 1}}>
      <ScrollView>
        <InputField
          title="Przebieg"
          value={mileage}
          onChangeText={text => mileageInputHandler(text)}
          keyboardType="number-pad"
          errorMsg={mileageErr}
        />
        <InputField
          title="Data"
          value={date}
          onChangeText={text => setDate(text)}
          onFocus={() => setShowDatepicker(true)}
        />
        <InputField
          title="Zatankowano"
          value={liters}
          onChangeText={text => litersInputHandler(text)}
          keyboardType="number-pad"
          errorMsg={litersErr}
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
          title={
            editRefuelling === null ? 'Dodaj tankowanie' : 'Zapisz tankowanie'
          }
          onPress={addRefuellingButtonHandler}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddRefuelling;
