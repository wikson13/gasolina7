import * as actions from './authActions';

const initialState = {
  token: null,
  userId: null,
  userEmail: null,
  error: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
        loading: false,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        userId: null,
        userEmail: null,
      };
    default:
      return state;
  }
}
