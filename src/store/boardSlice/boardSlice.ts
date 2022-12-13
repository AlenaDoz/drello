import { IBoardGot } from '../../types/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import {
  creationOfBoard,
  editBoards,
  getBoards,
  removeBoard,
} from './boardActions';

const initialState = {
  errorMessage: '',
  isLoading: false,
  boards: [] as IBoardGot[],
  shouldLoadBoards: true,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBoards.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(getBoards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.boards = action.payload;
      state.shouldLoadBoards = false;
    });
    builder.addCase(getBoards.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
      state.shouldLoadBoards = false;
    });
    builder.addCase(creationOfBoard.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(creationOfBoard.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.shouldLoadBoards = true;
    });
    builder.addCase(creationOfBoard.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.isLoading = false;
    });
    builder.addCase(editBoards.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(editBoards.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.shouldLoadBoards = true;
    });
    builder.addCase(editBoards.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.isLoading = false;
    });
    builder.addCase(removeBoard.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(removeBoard.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.shouldLoadBoards = true;
    });
    builder.addCase(removeBoard.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.isLoading = false;
    });
  },
});

export const boardReducer = boardSlice.reducer;
