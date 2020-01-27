import * as actions from './counterActions';
import {delay, put, takeLatest, fork} from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(1000);
  yield put({type: actions.INCREMENT_COUNTER});
}

function* watchIncrementAsync() {
  yield takeLatest(actions.ASYNC_INCREMENT_COUNTER, incrementAsync);
}

const counterSagas = [fork(watchIncrementAsync)];

export default counterSagas;
