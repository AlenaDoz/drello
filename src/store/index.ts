import { userReducer } from './userSlice/userSlice';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { boardReducer } from './boardSlice/boardSlice';
import { columnsReducer } from './columnsSlice/columnsSlice';
import { tasksReducer } from './tasksSlice/tasksSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
