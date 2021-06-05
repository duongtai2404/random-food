import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { grapqlApi } from '../../api/api-grapql';

const user = {
  userId: '',
  token: '',
  email: '',
  tokenExpiration: '',
  error: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    login: () => {},
    loginSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      return { ...state, ...action.payload, error: false };
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    loadFromStorage: (state, action) => {
      return { ...state, ...action.payload };
    },
    logOut: (state, action) => {
      state.token = '';
    }
  }
  // extraReducers: {
  //   [login.fulfilled]: (state, action) => {
  //     return action.payload.data.login;
  //   }
  // }
});

export const { login, loadFromStorage, logOut } = userSlice.actions;

export default userSlice.reducer;
