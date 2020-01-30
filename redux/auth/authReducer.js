import * as actions from './authActions';

const initialState = {
  token: null,
  userId: null,
  userEmail: null,
  loading: false,
  err: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.idToken,
        userId: action.payload.localId,
        userEmail: action.payload.email,
        loading: false,
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case actions.AUTH_LOGOUT:
      return {
        ...state,
        userId: null,
        userEmail: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
