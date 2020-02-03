import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from './dataActions';
import * as api from '../../api/data';
import axios from 'axios';
import {GET_DATA_REQUEST} from './dataActions';
import {deleteRequest} from './dataActions';

function calculateAvgConsumption(data) {
  let refuellingList = [];
  Object.keys(data.refuellings).map(refuelling => {
    refuellingList.push({...data.refuellings[refuelling], id: refuelling});
  });

  //CALC AVG FUEL CONSUMPTION
  let refuellingfArray = [];
  let refuellingfArray2 = {};
  refuellingList.reverse().forEach((refuelling, index) => {
    let kmsLastRef = null;
    let kmsLastFullRef = null;
    let refueledLiters = 0;
    let avgFuelConsumption = '-';
    let loopCounter = 1;

    let loopActive = true;

    if (refuellingList.length === index + 1) {
      avgFuelConsumption = '-';
    }

    if (refuellingList[index + 1] !== undefined) {
      kmsLastRef =
        Number(refuelling.mileage) - Number(refuellingList[index + 1].mileage);

      if (refuelling.fullRefuelling === true) {
        if (refuellingList[index + 1].fullRefuelling === true) {
          kmsLastFullRef =
            Number(refuelling.mileage) -
            Number(refuellingList[index + 1].mileage);
          refueledLiters = Number(refuelling.liters);
          avgFuelConsumption = (
            (refueledLiters / kmsLastFullRef) *
            100
          ).toFixed(2);
        } else {
          kmsLastFullRef +=
            refuellingList[index].mileage - refuellingList[index + 1].mileage;
          refueledLiters += Number(refuellingList[index].liters);
          while (loopActive) {
            if (refuellingList[index + loopCounter].fullRefuelling === false) {
              kmsLastFullRef +=
                Number(refuellingList[index + loopCounter].mileage) -
                Number(refuellingList[index + (loopCounter + 1)].mileage);
              refueledLiters += Number(
                refuellingList[index + loopCounter].liters,
              );
              loopCounter++;
            } else {
              loopActive = false;
              avgFuelConsumption = (
                (refueledLiters / kmsLastFullRef) *
                100
              ).toFixed(2);
            }
          }
        }
      }
    }

    refuellingfArray.push(avgFuelConsumption);

    refuellingfArray.forEach((item, index) => {
      if (item === '-' && index > 0 && index < refuellingList.length - 1) {
        refuellingfArray[index] = refuellingfArray[index - 1];
      }
    });

    if (refuelling.fullRefuelling === false && index > 0) {
      avgFuelConsumption = refuellingfArray[index - 1];
    }

    refuellingfArray2 = {
      ...refuellingfArray2,
      [refuelling.id]: {
        avg: refuellingfArray[index],
        fullRefuelling: refuelling.fullRefuelling,
        date: refuelling.date,
        amount: refuelling.amount,
        liters: refuelling.liters,
        mileage: refuelling.mileage,
        priceLiter: refuelling.priceLiter,
      },
    };
  });
  return {refuellings: {...refuellingfArray2}, services: {...data.services}};
}

function* getData(action) {
  try {
    const result = yield axios.get(
      `https://gasolina-native.firebaseio.com/users/${
        action.payload.userEmail
      }/.json`,
    );
    const list = calculateAvgConsumption(result.data);
    yield put(
      actions.getDataSuccess({
        data: list,
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
