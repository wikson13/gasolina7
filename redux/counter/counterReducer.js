import * as actionTypes from './counterActions';

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};
