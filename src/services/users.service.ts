import Joi from 'joi';
import usersModel from '../models/users.model';
import { Users } from '../types';

const usersService = {
  async validateAddBody(data: unknown) {
    const schema = Joi.object<Users>({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).positive().integer()
        .required(),
      password: Joi.string().min(8).required(),
    });
    const body = await schema.validateAsync(data);
    return body;
  },

  async add(data: Users): Promise<void> {
    await usersModel.add(data);
  },
};

export default usersService;