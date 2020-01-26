import {combineReducers} from 'redux';
import {counterReducer} from '../counter/counterReducer';
import {createStore} from 'redux';

const reducers = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducers);

export default store;
