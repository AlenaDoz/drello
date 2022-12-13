import { ITaskCreate, ITaskDelete, ITaskUpdate } from './../types/interfaces';
import { axiosPrivate } from '../axios/axios';

class TasksService {
  async getTasks(boardId: string) {
    return await axiosPrivate({
      method: 'GET',
      url: `/tasksSet/${boardId}`
    });
  }

  async addTask({ boardId, columnId, data }: ITaskCreate) {
    return await axiosPrivate({
      method: 'POST',
      url: `/boards/${boardId}/columns/${columnId}/tasks`,
      data,
    });
  }

  async updateTask({ boardId, columnId, taskId, data }: ITaskUpdate) {
    return await axiosPrivate({
      method: 'PUT',
      url: `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      data,
    });
  }

  async deleteTask({ boardId, columnId, taskId }: ITaskDelete) {
    return await axiosPrivate({
      method: 'DELETE',
      url: `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
    });
  }
}

export default new TasksService();
