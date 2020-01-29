export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';

export const authRequest = userData => {
  return {
    type: AUTH_REQUEST,
    payload: userData,
  };
};

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = responseData => {
  return {
    type: AUTH_SUCCESS,
    payload: responseData,
  };
};

export const authFailed = err => {
  return {
    type: AUTH_FAILED,
    payload: err,
  };
};
