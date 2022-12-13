import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  getColumns,
  updateColumn,
} from './columnsActions';
import { IColumn } from '../../types/interfaces';
import { swapArray } from '../../utils/utils';

interface IColumnsState {
  columns: IColumn[];
  errorMessage: string;
  error: boolean;
  isLoading: boolean;
  errorColumns: boolean;
  shouldLoadColumns: boolean;
  isColAddModalOpen: boolean;
  isColDeleteModalOpen: boolean;
  currentColumn: string;
}
export const initialState: IColumnsState = {
  columns: [],
  errorMessage: '',
  error: false,
  isLoading: false,
  errorColumns: false,
  shouldLoadColumns: true,
  isColAddModalOpen: false,
  isColDeleteModalOpen: false,
  currentColumn: '',
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    resetColumns: (state) => {
      state.columns = [];
    },
    setCurrentColumn: (state, action) => {
      state.currentColumn = action.payload;
    },
    toogleAddColumnModal: (state, action) => {
      state.isColAddModalOpen = action.payload;
    },
    toogleDeleteColumnModal: (state, action) => {
      state.isColDeleteModalOpen = action.payload;
    },
    swapColumn: (state, action) => {
      state.columns = swapArray(
        state.columns,
        action.payload[0],
        action.payload[1]
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addColumn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addColumn.fulfilled, (state, action) => {
      state.error = false;
      state.isLoading = false;
      state.isColAddModalOpen = false;
      state.shouldLoadColumns = true;
      state.columns = state.columns.map((el, i) => {
        return { ...el, order: i + 1 };
      });
      state.columns.push({
        ...action.payload,
        order: state.columns.length
          ? state.columns[state.columns.length - 1].order + 1
          : 1,
      });
    });
    builder.addCase(addColumn.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(deleteColumn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteColumn.fulfilled, (state, action) => {
      state.error = false;
      state.isLoading = false;
      state.isColAddModalOpen = false;
      state.shouldLoadColumns = true;
      state.columns = state.columns
        .filter((column) => column._id !== action.payload._id)
        .map((el, i) => {
          return { ...el, order: i + 1 };
        });
    });
    builder.addCase(deleteColumn.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(getColumns.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getColumns.fulfilled, (state, action) => {
      state.errorColumns = false;
      state.isLoading = false;
      state.columns = [...action.payload]
        .sort((a, b) => a.order - b.order)
        .map((el, i) => {
          return { ...el, order: i + 1 };
        });
      state.shouldLoadColumns = false;
    });
    builder.addCase(getColumns.rejected, (state) => {
      state.errorColumns = true;
      state.isLoading = false;
      state.shouldLoadColumns = false;
    });
    builder.addCase(updateColumn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateColumn.fulfilled, (state) => {
      state.errorColumns = false;
      state.isLoading = false;
      state.shouldLoadColumns = true;
    });
    builder.addCase(updateColumn.rejected, (state, action) => {
      state.errorColumns = true;
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
    });
  },
});

export const columnsReducer = columnsSlice.reducer;
export const {
  resetColumns,
  setCurrentColumn,
  toogleAddColumnModal,
  toogleDeleteColumnModal,
  swapColumn,
} = columnsSlice.actions;
