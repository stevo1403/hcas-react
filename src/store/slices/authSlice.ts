import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../../types/index';
import { config } from '../../config/index';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem(config.JWT_TOKEN_KEY),
  isAuthenticated: !!localStorage.getItem(config.JWT_TOKEN_KEY),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(config.JWT_TOKEN_KEY, action.payload.token);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      localStorage.removeItem(config.JWT_TOKEN_KEY);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem(config.JWT_TOKEN_KEY);
      localStorage.removeItem(config.REFRESH_TOKEN_KEY);
    },
    clearError: (state) => {
      state.error = null;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError, updateUser } =
  authSlice.actions;

export default authSlice.reducer;