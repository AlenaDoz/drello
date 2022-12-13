import { UserUpdateInterface } from './../types/interfaces';
import { axiosPrivate } from '../axios/axios';

class UserService {
  async updateUser({ id, data }: UserUpdateInterface) {
    return await axiosPrivate({
      method: 'PUT',
      url: `/users/${id}`,
      data,
    });
  }

  async deleteUser(id: string) {
    return await axiosPrivate({
      method: 'DELETE',
      url: `/users/${id}`,
    });
  }
}

export default new UserService();
