import { axiosPrivate } from '../axios/axios';
import { IBoard, IEditBoard } from '../types/interfaces';

class BoardsService {
  getBoardsByUserId = async (userId: string) => {
    return await axiosPrivate({
      method: 'GET',
      url: `/boardsSet/${userId}`,
    });
  };

  createBoard = async (data: IBoard) => {
    return await axiosPrivate({
      method: 'POST',
      url: `/boards`,
      data: {
        ...data,
        users: [],
      },
    });
  };

  editBoard = async (data: IEditBoard) => {
    return await axiosPrivate({
      method: 'PUT',
      url: `/boards/${data.boardId}`,
      data: {
        title: data.title,
        owner: data.owner,
        users: [],
      },
    });
  };

  deleteBoard = async (boardId: string) => {
    return await axiosPrivate({
      method: 'DELETE',
      url: `/boards/${boardId}`,
    });
  };
}

export default new BoardsService();
