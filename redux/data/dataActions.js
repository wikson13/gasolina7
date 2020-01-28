import {ASYNC_INCREMENT_COUNTER} from '../counter/counterActions';

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const ADD_REFUELLING_REQUEST = 'ADD_REFUELLING_REQUEST';
export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccess = ({data}) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addRefuellingRequest = newRefuelling => {
  return {
    type: ADD_REFUELLING_REQUEST,
    payload: newRefuelling,
  };
};
