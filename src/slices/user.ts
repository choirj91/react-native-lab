import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '관리자',
  email: 'asdf',
  password: 'asdf',
  accessToken: 'access',
  refreshToken: 'refresh',
  money: 0,
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setMoney(state, action) {
      state.money = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
