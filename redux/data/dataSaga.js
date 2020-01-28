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

function* addRefuelling(action) {
  try {
    yield call(api.addRefuelling, {
      mileage: action.payload.mileage,
      date: action.payload.date,
      liters: action.payload.liters,
      priceLiter: action.payload.priceLiter,
      amount: action.payload.amount,
      id: action.payload.id,
    });
    // yield call(getUsers);
  } catch (e) {
    console.log(e);
  }
}

function* watchAddRefuelling() {
  yield takeEvery(actions.ADD_REFUELLING_REQUEST, addRefuelling);
}

const dataSagas = [
  fork(watchGetDataRequest),
  fork(watchAddRefuelling),
  // fork(watchDeleteUserRequest),
];

export default dataSagas;
