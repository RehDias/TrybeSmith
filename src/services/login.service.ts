import Joi from 'joi';
import UnauthorizedError from '../err/unauthorized';
import loginModel from '../models/login.model';
import { Login } from '../types';

const loginService = {
  async validateBodyLogin(data: unknown): Promise<Login> {
    const schema = Joi.object<Login>({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const userLogin = await schema.validateAsync(data);
    return userLogin;
  },

  async exists(data: Login): Promise<void> {
    const user = await loginModel.exists(data);
    if (!user) throw new UnauthorizedError('Username or password invalid');
  },

  async getByUsername(username: string) {
    const user = await loginModel.getByUsername(username);
    return user;
  },
};

export default loginService;