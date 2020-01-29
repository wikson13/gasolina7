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
      console.log(action);
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
        loading: false,
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
