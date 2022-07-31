import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const ordersController = {
  async list(_req: Request, res: Response) {
    const orders = await ordersService.list();       
    res.json(orders);
  },
};

export default ordersController;