import { createSlice } from '@reduxjs/toolkit';

import { configureApiHeaderAuthen } from '../../api/api-grapql';

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
      const { email, token, tokenExpiration } = action.payload;
      localStorage.setItem('email', email);
      localStorage.setItem('tokenExpiration', tokenExpiration);
      localStorage.setItem('token', token);
      configureApiHeaderAuthen(token);

      return { ...state, ...action.payload, error: false };
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    loadFromStorage: (state, action) => {
      configureApiHeaderAuthen(action.payload.token);
      return { ...state, ...action.payload };
    },
    logOut: (state, action) => {
      localStorage.clear();
      state.token = '';
    }
  }
});

export const { login, loadFromStorage, logOut } = userSlice.actions;

export default userSlice.reducer;
