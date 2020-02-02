import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from './dataActions';
import * as api from '../../api/data';
import axios from 'axios';
import {GET_DATA_REQUEST} from './dataActions';
import {deleteRequest} from './dataActions';

function testt() {
  console.log('testt');
}

function* getData(action) {
  try {
    const result = yield axios.get(
      `https://gasolina-native.firebaseio.com/users/${
        action.payload.userEmail
      }/.json`,
    );
    yield call(testt);
    console.log(result);
    // yield put(
    //   actions.getDataSuccess({
    //     data: result.data,
    //   }),
    // );
  } catch (e) {
    console.log(e);
  }
}

function* watchGetDataRequest() {
  yield takeEvery(actions.GET_DATA_REQUEST, getData);
}

function* addRefuelling(action) {
  const {
    mileage,
    date,
    liters,
    priceLiter,
    amount,
    fullRefuelling,
    id,
    userEmail,
  } = action.payload;
  try {
    yield axios.put(
      `https://gasolina-native.firebaseio.com/users/${userEmail}/refuellings/${id}.json`,
      {
        mileage,
        date,
        liters,
        priceLiter,
        amount,
        fullRefuelling,
      },
    );

    yield call(getData, {payload: {userEmail}});
  } catch (e) {
    console.log(e);
  }
}

function* watchAddRefuelling() {
  yield takeEvery(actions.ADD_REFUELLING_REQUEST, addRefuelling);
}

function* addService(action) {
  const {
    title,
    description,
    mileage,
    date,
    amount,
    id,
    userEmail,
  } = action.payload;
  try {
    yield axios.put(
      `https://gasolina-native.firebaseio.com/users/${userEmail}/services/${id}.json`,
      {
        title,
        description,
        mileage,
        date,
        amount,
      },
    );
    yield call(getData, {payload: {userEmail}});
  } catch (e) {
    console.log(e);
  }
}

function* deleteItemRequest(action) {
  const {type, id, userEmail} = action.payload;
  try {
    yield axios.delete(
      `https://gasolina-native.firebaseio.com/users/${userEmail}/${type}/${id}.json`,
    );
    yield call(getData, {payload: {userEmail}});
  } catch (e) {
    console.log(e);
  }
}

function* watchAddService() {
  yield takeEvery(actions.ADD_SERVICE_REQUEST, addService);
}

function* watchDeleteItemRequest() {
  yield takeLatest(actions.DELETE_REQUEST, deleteItemRequest);
}

const dataSagas = [
  fork(watchGetDataRequest),
  fork(watchAddRefuelling),
  fork(watchAddService),
  fork(watchDeleteItemRequest),
];

export default dataSagas;
