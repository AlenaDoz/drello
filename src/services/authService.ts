import { axiosPublic } from './../axios/axios';
import { ISignInForm, ISignUpForm } from '../types/interfaces';

class AuthService {
  async registration(data: ISignUpForm) {
    return await axiosPublic({
      method: 'POST',
      url: `/auth/signup`,
      data,
    });
  }

  async login(data: ISignInForm) {
    return await axiosPublic({
      method: 'POST',
      url: `/auth/signin`,
      data,
    });
  }
}

export default new AuthService();
