export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const CHECK_AUTH_REQUEST = 'CHECK_AUTH_REQUEST';
export const CHECK_SET_LOGOUT = 'CHECK_SET_LOGOUT';

export const authRequest = (email, password, isSignup) => {
  return {
    type: AUTH_REQUEST,
    payload: {
      email,
      password,
      isSignup,
    },
  };
};

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (token, userId, userEmail) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token,
      userId,
      userEmail,
    },
  };
};

export const authFailed = error => {
  console.log(error);
  return {
    type: AUTH_FAILED,
    payload: error,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const checkAuthRequest = token => {
  return {
    type: CHECK_AUTH_REQUEST,
    payload: token,
  };
};

export const checkSetLogout = () => {
  return {
    type: CHECK_SET_LOGOUT,
  };
};
