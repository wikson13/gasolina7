import * as actions from './dataActions';

const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_SUCCESS: {
      return {
        data: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
