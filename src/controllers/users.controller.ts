import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { createToken } from '../services/utils';

const usersController = {
  async add(req: Request, res: Response) {
    const data = await usersService.validateAddBody(req.body);
    await usersService.add(data);
    const { password, ...user } = data;
    const token = await createToken(user);
    res.status(201).json({ token });
  },
};

export default usersController;