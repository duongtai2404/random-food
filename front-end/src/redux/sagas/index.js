import { all } from 'redux-saga/effects';

import { watchLogin } from './user.saga';
import {
  watchGetAllFood,
  watchAddFood,
  watchDeleteFood,
  watchUpdateFood
} from './food.saga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchGetAllFood(),
    watchAddFood(),
    watchDeleteFood(),
    watchUpdateFood()
  ]);
}
