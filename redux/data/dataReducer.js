import * as actions from './dataActions';

const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_SUCCESS: {
      return {
        refuellings: action.payload.data.refuellings,
        services: action.payload.data.services,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
