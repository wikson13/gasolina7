import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  Alert,
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
import SwitchField from '../components/SwitchField';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const todayDate = moment(new Date()).format('DD.MM.YYYY');
// const todayDate = new Date();
const AddRefuelling = props => {
  let editRefuelling = null;
  if (props.navigation.state.params) {
    editRefuelling = props.navigation.state.params;
  }
  const [mileage, setMileage] = useState(
    editRefuelling === null ? '' : editRefuelling.mileage,
  );
  const [date, setDate] = useState(
    editRefuelling === null ? todayDate : editRefuelling.date,
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

  const [fullRefuelling, setFullRefuelling] = useState(
    editRefuelling === null ? true : editRefuelling.fullRefuelling,
  );

  const [showDatepicker, setShowDatepicker] = useState(false);

  const [mileageErr, setMileageErr] = useState(null);
  const [litersErr, setLitersErr] = useState(null);
  const [priceLiterErr, setPriceLiterErr] = useState(null);

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
      fullRefuelling,
      id: editRefuelling === null ? generateId() : editRefuelling.id,
      userEmail: userEmail.replace(/\./g, '_'),
    };
    dispatch(dataActions.addRefuellingRequest(refuelling));
    props.navigation.navigate('Fuel');
  };

  const mileageInputHandler = value => {
    if (value.trim().length <= 0) {
      setMileageErr('To pole jest wymagane');
    } else if (!/^\d+$/.test(text)) {
      setMileageErr('Wpisano nieprawidłową wartość');
    } else {
      setMileageErr(null);
    }
    setMileage(value);
  };

  const litersInputHandler = value => {
    if (value.trim().length <= 0) {
      setLitersErr('To pole jest wymagane');
    } else if (!/^[+]?([0-9]{1,4})[.,]{0,1}([0-9]{0,3})?$/.test(value)) {
      setLitersErr('Wpisano nieprawidłową wartość');
    } else {
      setLitersErr(null);
    }
    setLiters(value);
  };

  const PriceLiterInputHandler = value => {
    if (value.trim().length <= 0) {
      setPriceLiterErr('To pole jest wymagane');
    } else if (!/^[+]?([0-9]{1,3})[.,]{0,1}([0-9]{0,3})?$/.test(value)) {
      setPriceLiterErr('Wpisano nieprawidłową wartość');
    } else {
      setPriceLiterErr(null);
    }

    setPriceLiter(value);
  };

  const handleDatapickerConfirm = date => {
    setShowDatepicker(false);

    const formatedDate = moment(date).format('DD.MM.YYYY');
    console.log(showDatepicker);
    console.log('aaa');
    setDate(formatedDate);
    setShowDatepicker(false);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={15}
      behavior="margin"
      style={{flex: 1}}>
      <ScrollView>
        <InputField
          title="Przebieg"
          value={mileage}
          onChangeText={value => mileageInputHandler(value)}
          keyboardType="number-pad"
          errorMsg={mileageErr}
        />
        <InputField
          title="Data"
          value={date}
          onChangeText={value => setDate(value)}
          onFocus={() => setShowDatepicker(true)}
        />
        <InputField
          title="Zatankowano"
          value={liters}
          onChangeText={value => litersInputHandler(value)}
          keyboardType="number-pad"
          errorMsg={litersErr}
        />
        <InputField
          title="Cena za litr"
          value={priceLiter}
          onChangeText={text => PriceLiterInputHandler(text)}
          keyboardType="number-pad"
          errorMsg={priceLiterErr}
        />
        <InputField
          title="Zapłacono"
          value={amount}
          onChangeText={text => setAmount(text)}
          keyboardType="number-pad"
        />

        <SwitchField
          title="Tankowanie do pełna"
          value={fullRefuelling}
          onValueChange={() => setFullRefuelling(!fullRefuelling)}
        />
        <ButtonClassic
          title={
            editRefuelling === null ? 'Dodaj tankowanie' : 'Zapisz tankowanie'
          }
          onPress={addRefuellingButtonHandler}
        />
        {showDatepicker && (
          <DateTimePickerModal
            isVisible={showDatepicker}
            mode="date"
            locale="pl_PL"
            cancelTextIOS="Anuluj"
            confirmTextIOS="Potwierdź"
            headerTextIOS="Wybierz datę"
            onConfirm={handleDatapickerConfirm}
            onCancel={() => setShowDatepicker(false)}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddRefuelling;
