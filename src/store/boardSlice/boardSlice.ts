import { IBoard, IBoardGot, IEditBoard } from '../../types/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  createBoard,
  editBoard,
  getBoardsByUserId,
  deleteBoard,
} from './boardRequests';

export const initialState = {
  errorMessage: '',
  error: false,
  loading: false,
  isCreateModalOpened: false,
  errorBoards: false,
  loadingBoards: false,
  errorBoardsMessage: '',
  boards: [] as IBoardGot[],
  shouldLoadBoards: true,
  isEditLoading: false,
  isEditLoadingError: false,
  isDeleteLoading: false,
};

export const creationOfBoard = createAsyncThunk(
  'board/create',
  async (data: IBoard, { rejectWithValue }) => {
    try {
      const response = await createBoard(data);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const getBoards = createAsyncThunk(
  'boards/get',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await getBoardsByUserId(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const editBoards = createAsyncThunk(
  'boards/edit',
  async (data: IEditBoard, { rejectWithValue }) => {
    try {
      const response = await editBoard(data);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const removeBoard = createAsyncThunk(
  'boards/delete',
  async (boardId: string, { rejectWithValue }) => {
    try {
      const response = await deleteBoard(boardId);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeIsCreateModalOpened: (state, action) => {
      state.isCreateModalOpened = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(creationOfBoard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(creationOfBoard.fulfilled, (state) => {
      state.error = false;
      state.loading = false;
      state.isCreateModalOpened = false;
      state.shouldLoadBoards = true;
    });
    builder.addCase(creationOfBoard.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getBoards.pending, (state) => {
      state.loadingBoards = true;
    });
    builder.addCase(getBoards.fulfilled, (state, action) => {
      state.errorBoards = false;
      state.loadingBoards = false;
      state.boards = action.payload;
      state.shouldLoadBoards = false;
    });
    builder.addCase(getBoards.rejected, (state, action) => {
      state.errorBoardsMessage = (action.payload as Error).message || '';
      state.errorBoards = true;
      state.loadingBoards = false;
      state.shouldLoadBoards = false;
    });
    builder.addCase(editBoards.pending, (state) => {
      state.isEditLoading = true;
      state.isEditLoadingError = false;
    });
    builder.addCase(editBoards.fulfilled, (state) => {
      state.shouldLoadBoards = true;
      state.isEditLoading = false;
      state.isEditLoadingError = false;
    });
    builder.addCase(editBoards.rejected, (state) => {
      state.isEditLoading = false;
      state.isEditLoadingError = true;
    });
    builder.addCase(removeBoard.pending, (state) => {
      state.isDeleteLoading = true;
    });
    builder.addCase(removeBoard.fulfilled, (state) => {
      state.isDeleteLoading = false;
      state.shouldLoadBoards = true;
    });
    builder.addCase(removeBoard.rejected, (state) => {
      state.isDeleteLoading = false;
    });
  },
});

export const boardReducer = boardSlice.reducer;
export const { changeIsCreateModalOpened } = boardSlice.actions;
