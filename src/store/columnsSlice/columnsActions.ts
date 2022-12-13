import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import ColumnService from '../../services/columnsService';
import { IColumnCreate, IColumnDelete, IColumnUpdate } from '../../types/interfaces';

export const getColumns = createAsyncThunk(
  'columns/get',
  async (boardId: string, { rejectWithValue }) => {
    try {
      const response = await ColumnService.getColumns(boardId);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/add',
  async ({ id, data }: IColumnCreate, { rejectWithValue }) => {
    try {
      const response = await ColumnService.addColumn({ id, data });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'columns/edit',
  async ({ boardId, columnId, data }: IColumnUpdate, { rejectWithValue }) => {
    try {
      const response = await ColumnService.updateColumn({ boardId, columnId, data });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/delete',
  async ({ boardId, columnId }: IColumnDelete, { rejectWithValue }) => {
    try {
      const response = await ColumnService.deleteColumn({ boardId, columnId });
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);
