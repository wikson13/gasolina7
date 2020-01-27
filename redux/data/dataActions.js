export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

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
