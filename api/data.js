import axios from 'axios';
import {useSelector} from 'react-redux';
import React from 'react';

export const getData = username => {
  console.log(username.username);
  console.log('ee');
  return axios.get(
    `https://gasolina-native.firebaseio.com/users/${username.username}/.json`,
    {
      params: {
        limit: 1000,
      },
    },
  );
};

// export const addUser = ({firstName, lastName, id}) => {
//   return axios.put(`https://gasolina-native.firebaseio.com/users/${id}.json`, {
//     firstName: firstName,
//     lastName: lastName,
//     id: id,
//   });
// };

export const addRefuelling = ({
  mileage,
  date,
  liters,
  priceLiter,
  amount,
  id,
}) => {
  return axios.put(
    `https://gasolina-native.firebaseio.com/users/username/refuellings/${id}.json`,
    {
      mileage,
      date,
      liters,
      priceLiter,
      amount,
    },
  );
};

export const addService = ({title, description, mileage, date, amount, id}) => {
  return axios.put(
    `https://gasolina-native.firebaseio.com/users/username/services/${id}.json`,
    {
      title,
      description,
      mileage,
      date,
      amount,
    },
  );
};

export const deleteUser = userId => {
  return axios.delete(
    `https://gasolina-native.firebaseio.com/users/${userId}.json`,
  );
};

// indexJS
// axios.defaults.baseURL = 'https://gasolina-native.firebaseio.com/';
