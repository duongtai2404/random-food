import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas/index';

import foodSlice from '../slices/FoodSlice';
import userSlice from '../slices/UserSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice,
    foods: foodSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(mySaga);

export default store;
