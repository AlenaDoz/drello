export interface ISignUpForm {
  name: string;
  login: string;
  password: string;
}

export interface ISignInForm {
  login: string;
  password: string;
}

export interface IBoard {
  title: string;
  owner: string;
}

export interface UserUpdateInterface {
  id: string;
  data: ISignUpForm;
}

export interface IDnDItem {
  index?: number;
  name?: string;
  currentColumnName?: string;
  type?: string;
  columnId: string;
}

export interface IdropResult {
  dropEffect: string;
  newColumnId: string;
  children: JSX.Element[];
}

export interface IBoardGot {
  title: string;
  owner: string;
  _id: string;
  users: [];
}

export interface IEditBoard {
  boardId: string;
  title: string;
  owner: string;
}  

export interface IColumn {
  _id: string;
  title: string;
  order: number;
  boardId?: string;
}

export interface IColumnCreate {
  id: string;
  data: IColumn;
}
export interface IColumnForUpdate{
  title: string;
  order: number;
}

export interface IColumnUpdate {
  boardId: string;
  columnId: string;
  data: IColumnForUpdate;
}

export interface IColumnDelete {
  boardId: string;
  columnId: string;
}

export interface ITask {
  _id: string;
  title: string;
  order: number;
  description: string;
  columnId: string;
  userId: string;
  users: string[];
}

export interface ITaskUpdateAPI {
  title: string;
  order: number;
  description: string;
  columnId: string;
  userId: string;
  users: string[];
}

export interface ITaskCreate {
  boardId: string;
  columnId: string;
  data: ITask;
}

export interface ITaskUpdate {
  boardId: string;
  columnId: string;
  taskId: string;
  data: ITaskUpdateAPI;
}

export interface ITaskDelete {
  boardId: string;
  columnId: string;
  taskId: string;
}

export interface IAddEditModal {
  title?: string;
  description?: string;
}
