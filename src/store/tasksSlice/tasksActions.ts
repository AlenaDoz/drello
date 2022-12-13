import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import TasksService from '../../services/tasksService';
import { ITaskCreate, ITaskDelete, ITaskUpdate } from '../../types/interfaces';

export const getTasks = createAsyncThunk(
  'tasks/get',
  async (boardId: string, { rejectWithValue }) => {
    try {
      const response = await TasksService.getTasks(boardId);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/add',
  async ({ boardId, columnId, data }: ITaskCreate, { rejectWithValue }) => {
    try {
      const response = await TasksService.addTask({ boardId, columnId, data });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/update',
  async ({ boardId, columnId, taskId, data }: ITaskUpdate, { rejectWithValue }) => {
    try {
      const response = await TasksService.updateTask({ boardId, columnId, taskId, data });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async ({ boardId, columnId, taskId }: ITaskDelete, { rejectWithValue }) => {
    try {
      const response = await TasksService.deleteTask({ boardId, columnId, taskId });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);
