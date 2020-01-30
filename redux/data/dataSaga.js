import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from './dataActions';
import * as api from '../../api/data';

function* getData(action) {
  try {
    const result = yield call(api.getData, {username: action.payload.username});
    yield put(
      actions.getDataSuccess({
        data: result.data,
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
    yield call(getData);
  } catch (e) {
    console.log(e);
  }
}

function* watchAddRefuelling() {
  yield takeEvery(actions.ADD_REFUELLING_REQUEST, addRefuelling);
}

function* addService(action) {
  try {
    yield call(api.addService, {
      title: action.payload.title,
      description: action.payload.description,
      mileage: action.payload.mileage,
      date: action.payload.date,
      amount: action.payload.amount,
      id: action.payload.id,
    });
    yield call(getData);
  } catch (e) {
    console.log(e);
  }
}

function* watchAddService() {
  yield takeEvery(actions.ADD_SERVICE_REQUEST, addService);
}

const dataSagas = [
  fork(watchGetDataRequest),
  fork(watchAddRefuelling),
  fork(watchAddService),
  // fork(watchDeleteUserRequest),
];

export default dataSagas;
