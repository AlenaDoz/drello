import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import authService from '../../services/authService';
import userService from '../../services/userService';
import {
  ISignInForm,
  ISignUpForm,
  UserUpdateInterface,
} from '../../types/interfaces';

export const userRegistration = createAsyncThunk(
  'auth/registration',
  async (data: ISignUpForm, { rejectWithValue }) => {
    try {
      const response = await authService.registration(data);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (data: ISignInForm, { rejectWithValue }) => {
    try {
      const response = await authService.login(data);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ id, data }: UserUpdateInterface, { rejectWithValue }) => {
    try {
      const response = await userService.updateUser({ id, data });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'auth/deleteUser',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await userService.deleteUser(id);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);
