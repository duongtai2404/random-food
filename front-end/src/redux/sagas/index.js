import { takeLatest, call, put } from 'redux-saga/effects';

import graphqlApi from '../../api/api-grapql';

function* loginUser(action) {
  const { email, password } = action.payload;
  const requestBody = {
    query: `query{
      login(email: "${email}", password: "${password}"){
        userId,
        token,
        email,
        tokenExpiration
      }
    }`
  };

  try {
    const result = yield call(graphqlApi, requestBody);
    yield put({ type: 'user/loginSuccess', payload: result.data.data.login });
  } catch (err) {
    yield put({ type: 'user/loginFailure', payload: true });
  }
}

function* watchLogin() {
  yield takeLatest('user/login', loginUser);
}

export default watchLogin;
