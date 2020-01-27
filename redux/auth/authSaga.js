import {takeLatest, put, fork, call} from 'redux-saga/effects';
import * as actions from './authActions';
import axios from 'axios';

function* authRequest(action) {
  const authData = {
    email: action.payload.email,
    password: action.payload.password,
    returnSecureToken: true,
  };
  console.log(authData);

  let url =
    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBoAc2hkELCG0C1ZcKTdY5OO43qRyYd1O8';
  if (!action.payload.isSignup) {
    url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBoAc2hkELCG0C1ZcKTdY5OO43qRyYd1O8';
  }

  try {
    const response = yield axios.post(url, authData);
    const expirationDate = new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );

    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('email', response.data.email);
    yield localStorage.setItem('userId', response.data.localId);
    yield localStorage.setItem('expirationDate', expirationDate.getTime());
    yield put(
      actions.authSuccess(
        response.data.idToken,
        response.data.localId,
        response.data.email,
      ),
    );
    yield put(actions.checkSetLogout());
  } catch (e) {
    yield put(actions.authFailed(e.response.data.error));
  }
}

function* watchAuthRequest() {
  yield takeLatest(actions.AUTH_REQUEST, authRequest);
}

const authSagas = [fork(watchAuthRequest)];

export default authSagas;

// function* watchAuthSagas() {
//   yield takeLatest(actionTypes.AUTH_REQUEST, authRequest);
//   yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutRequest);
//   yield takeEvery(actionTypes.CHECK_AUTH_REQUEST, authCheck);
//   yield takeEvery(actionTypes.CHECK_SET_LOGOUT, checkSetTimeout);
// }
