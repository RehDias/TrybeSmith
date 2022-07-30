import Joi from 'joi';
import usersModel from '../models/users.model';
import { Users } from '../types';

const usersService = {
  async validateAddBody(data: unknown) {
    const schema = Joi.object<Users>({
      username: Joi.string().required(),
      classe: Joi.string().required(),
      level: Joi.number().positive().integer().required(),
      password: Joi.string().required(),
    });
    const body = await schema.validateAsync(data);
    return body;
  },

  async add(data: Users): Promise<void> {
    await usersModel.add(data);
  },
};

export default usersService;