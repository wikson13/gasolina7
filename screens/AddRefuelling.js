import React from 'react';
import {View, Text, TextInput} from 'react-native';
import InputField from '../components/InputField';
const AddRefuelling = () => {
  return (
    <View>
      <InputField title="Przebieg" />
      <InputField title="Data" />
      <InputField title="Zatankowano" />
    </View>
  );
};

export default AddRefuelling;
