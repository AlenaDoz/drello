import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import boardsService from "../../services/boardsService";
import { IBoard, IEditBoard } from "../../types/interfaces";

export const creationOfBoard = createAsyncThunk(
    'board/create',
    async (data: IBoard, { rejectWithValue }) => {
      try {
        const response = await boardsService.createBoard(data);
        return response.data;
      } catch (error) {
        return rejectWithValue((error as AxiosError).response?.data);
      }
    }
  );
  
  export const getBoards = createAsyncThunk(
    'board/get',
    async (userId: string, { rejectWithValue }) => {
      try {
        const response = await boardsService.getBoardsByUserId(userId);
        return response.data;
      } catch (error) {
        return rejectWithValue((error as AxiosError).response?.data);
      }
    }
  );
  
  export const editBoards = createAsyncThunk(
    'board/edit',
    async (data: IEditBoard, { rejectWithValue }) => {
      try {
        const response = await boardsService.editBoard(data);
        return response.data;
      } catch (error) {
        return rejectWithValue((error as AxiosError).response?.data);
      }
    }
  );
  
  export const removeBoard = createAsyncThunk(
    'board/delete',
    async (boardId: string, { rejectWithValue }) => {
      try {
        const response = await boardsService.deleteBoard(boardId);
        return response.data;
      } catch (error) {
        return rejectWithValue((error as AxiosError).response?.data);
      }
    }
  );