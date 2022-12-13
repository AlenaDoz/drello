import { createSlice } from '@reduxjs/toolkit';
import {
  userLogin,
  userRegistration,
  updateUser,
  deleteUser,
} from './userActions';

interface IUserState {
  isLoading: boolean;
  isAuth: boolean;
  errorMessage: string;
  user: {
    id: string;
  };
}
export const initialState: IUserState = {
  isLoading: false,
  isAuth: !!localStorage.getItem('token'),
  errorMessage: '',
  user: {
    id: '',
  },
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuth = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
    });
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state) => {
      state.isAuth = true;
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.isAuth = false;
      localStorage.removeItem('token');
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
    });
  },
});

export const { logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
