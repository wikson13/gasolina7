import axios from 'axios';

export const getData = () => {
  return axios.get('https://gasolina-native.firebaseio.com/data.json', {
    params: {
      limit: 1000,
    },
  });
};

export const addUser = ({firstName, lastName, id}) => {
  return axios.put(`https://gasolina-native.firebaseio.com/users/${id}.json`, {
    firstName: firstName,
    lastName: lastName,
    id: id,
  });
};

export const addRefuelling = ({
  mileage,
  date,
  liters,
  priceLiter,
  amount,
  id,
}) => {
  return axios.put(
    `https://gasolina-native.firebaseio.com/refuellings/${id}.json`,
    {
      mileage,
      date,
      liters,
      priceLiter,
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
