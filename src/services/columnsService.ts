import { IColumnCreate, IColumnDelete, IColumnUpdate } from './../types/interfaces';
import { axiosPrivate } from '../axios/axios';

class ColumnService {
  async getColumns(id: string) {
    return await axiosPrivate({
      method: 'GET',
      url: `/boards/${id}/columns`
    });
  }

  async addColumn({ id, data }: IColumnCreate) {
    return await axiosPrivate({
      method: 'POST',
      url: `/boards/${id}/columns`,
      data,
    });
  }

  async updateColumn({ boardId, columnId, data }: IColumnUpdate) {
    return await axiosPrivate({
      method: 'PUT',
      url: `/boards/${boardId}/columns/${columnId}`,
      data,
    });
  }

  async deleteColumn({ boardId, columnId }: IColumnDelete) {
    return await axiosPrivate({
      method: 'DELETE',
      url: `/boards/${boardId}/columns/${columnId}`,
    });
  }
}

export default new ColumnService();
