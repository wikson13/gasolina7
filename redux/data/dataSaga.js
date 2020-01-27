import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from './dataActions';
import * as api from '../../api/data';

function* getData() {
  try {
    const result = yield call(api.getData);
    console.log(result);
    yield put(
      actions.getDataSuccess({
        users: result.data,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchGetDataRequest() {
  yield takeEvery(actions.GET_DATA_REQUEST, getData);
}

const userSagas = [
  fork(watchGetDataRequest),
  // fork(watchCreateUser),
  // fork(watchDeleteUserRequest),
];

export default userSagas;
