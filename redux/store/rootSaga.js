import {all} from 'redux-saga/effects';
import dataSagas from '../data/dataSaga';
import counterSagas from '../counter/counterSaga';
import authSagas from '../auth/authSaga';

export default function* rootSaga() {
  yield all([...authSagas, ...dataSagas, ...counterSagas]);
}
