import {combineReducers} from 'redux';
import {counterReducer} from '../counter/counterReducer';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import {composeWithDevTools} from 'redux-devtools-extension';
import dataReducer from '../data/dataReducer';
import authReducer from '../auth/authReducer';

const reducers = combineReducers({
  counter: counterReducer,
  data: dataReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
