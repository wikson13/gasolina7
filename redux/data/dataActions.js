import {ASYNC_INCREMENT_COUNTER} from '../counter/counterActions';

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const ADD_REFUELLING_REQUEST = 'ADD_REFUELLING_REQUEST';
export const ADD_SERVICE_REQUEST = 'ADD_SERVICE_REQUEST';

export const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
  payload: {
    username: 'test@test_pl',
  },
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

export const addServiceRequest = newService => {
  return {
    type: ADD_SERVICE_REQUEST,
    payload: newService,
  };
};
