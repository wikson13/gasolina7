import * as authActions from './authActions';
import {put, takeLatest, takeEvery, fork} from 'redux-saga/effects';

import * as axios from 'axios';

function* authRequest({payload}) {
  yield put(authActions.authStart());
  let url =
    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBoAc2hkELCG0C1ZcKTdY5OO43qRyYd1O8';
  if (payload.isLogin) {
    url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBoAc2hkELCG0C1ZcKTdY5OO43qRyYd1O8';
  }
  const userData = {
    email: payload.email,
    password: payload.password,
    returnSecureToken: true,
  };
  console.log(url);
  console.log(payload);
  try {
    const response = yield axios.post(url, userData);
    yield put(authActions.authSuccess(response.data));
  } catch (e) {
    yield put(authActions.authFailed(e.response.data.error));
  }
}

function* watchAuthRequest() {
  yield takeLatest(authActions.AUTH_REQUEST, authRequest);
}

const authSagas = [fork(watchAuthRequest)];

export default authSagas;
