import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';

import graphqlApi from '../../api/api-grapql';

function* getAllFoods() {
  const requestBody = {
    query: `query{
      foods{
        _id
        name
        isMainFood
      }
    }`
  };

  try {
    const result = yield call(graphqlApi, requestBody);
    yield put({
      type: 'foods/getAllFoodsSuccess',
      payload: result.data.data.foods
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'foods/getAllFoodsFailure' });
    yield put({ type: 'user/logOut' });
  }
}

function* addFood(action) {
  const { name, isMainFood } = action.payload;
  const requestBody = {
    query: `mutation{
      createFood(foodInput: {name: "${name}", isMainFood: ${isMainFood}}){
        _id
        name
        isMainFood
      }
    }`
  };
  try {
    const result = yield call(graphqlApi, requestBody);
    yield put({
      type: 'foods/addFoodSuccess',
      payload: result.data.data.createFood
    });
  } catch (err) {
    yield put({ type: 'foods/addFoodFailure' });
  }
}

function* deleteFood(action) {
  const requestBody = {
    query: `mutation{
      deleteFood(_id: "${action.payload}")
    }`
  };

  try {
    yield call(graphqlApi, requestBody);
    yield put({ type: 'foods/deleteSuccess', payload: action.payload });
  } catch (error) {
    yield put({ type: 'foods/deleteFail' });
  }
}

function* updateFood(action) {
  const { _id, name, isMainFood } = action.payload;
  const requestBody = {
    query: `mutation{
      updateFood(_id: "${_id}",foodInput: {name: "${name}",isMainFood: ${isMainFood}})
    }`
  };

  try {
    yield call(graphqlApi, requestBody);
    yield put({ type: 'foods/updateSuccess', payload: { ...action.payload } });
  } catch (err) {
    yield put({ type: 'foods/updateFail' });
  }
}

export function* watchUpdateFood() {
  yield takeEvery('foods/updateFood', updateFood);
}

export function* watchDeleteFood() {
  yield takeEvery('foods/deleteFood', deleteFood);
}

export function* watchAddFood() {
  yield takeEvery('foods/addFood', addFood);
}

export function* watchGetAllFood() {
  yield takeLatest('foods/getAllFoods', getAllFoods);
}
