import { Request, Response } from 'express';
import loginService from '../services/login.service';
import { createToken } from '../services/utils';

const loginController = {
  async login(req: Request, res: Response) {
    const data = await loginService.validateBodyLogin(req.body);
    await loginService.exists(data);
    const user = await loginService.getByUsername(data.username);
    const token = await createToken({ ...user });
    res.json({ token });
  },
};

export default loginController;