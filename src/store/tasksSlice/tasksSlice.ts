import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types/interfaces';
import { addTask, deleteTask, getTasks, updateTask } from './tasksActions';

interface ITaskState {
  tasks: ITask[];
  errorMessage: string;
  error: boolean;
  loading: boolean;
  loadingTasks: boolean;
  errorTasks: boolean;
  shouldLoadTasks: boolean;
  isTaskAddModalOpen: boolean;
  isTaskDeleteModalOpen: boolean;
  currentTask: string;
  isTaskDetailsOpen: boolean;
  taskDetails: ITask | null;
}
export const initialState: ITaskState = {
  tasks: [],
  errorMessage: '',
  error: false,
  loading: false,
  loadingTasks: false,
  errorTasks: false,
  shouldLoadTasks: true,
  isTaskAddModalOpen: false,
  isTaskDeleteModalOpen: false,
  currentTask: '',
  isTaskDetailsOpen: false,
  taskDetails: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    resetTasks: (state) => {
      state.tasks = []
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
    toogleAddTaskModal: (state, action) => {
      state.isTaskAddModalOpen = action.payload;
    },
    toogleDeleteTaskModal: (state, action) => {
      state.isTaskDeleteModalOpen = action.payload;
    },
    toogleTaskDetailsModal: (state, action) => {
      state.isTaskDetailsOpen = action.payload;
    },
    setTaskDetails: (state, action) => {
      state.taskDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.loadingTasks = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.errorTasks = false;
      state.loadingTasks = false;
      state.tasks = action.payload;
      state.shouldLoadTasks = false;
    });
    builder.addCase(getTasks.rejected, (state) => {
      state.errorTasks = true;
      state.loadingTasks = false;
      state.shouldLoadTasks = false;
    });
    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.isTaskAddModalOpen = false;
      state.shouldLoadTasks = true;
      state.tasks.push(action.payload);
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.loading = false;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.isTaskAddModalOpen = false;
      state.shouldLoadTasks = true;
      state.tasks = state.tasks.filter(task => task._id !== action.payload._id);
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.loading = false;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.errorTasks = false;
      state.loadingTasks = false;
      const index = state.tasks.findIndex(task => task._id === action.payload._id);
      state.tasks[index] = action.payload;
      state.shouldLoadTasks = false;
    })
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { resetTasks, toogleAddTaskModal, toogleDeleteTaskModal, setCurrentTask, toogleTaskDetailsModal, setTaskDetails } = tasksSlice.actions;
