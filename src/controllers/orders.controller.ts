import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import productsService from '../services/products.service';
import { ReqUser } from '../types';

const ordersController = {
  async list(_req: Request, res: Response) {
    const orders = await ordersService.list();       
    res.json(orders);
  },

  async add(req: ReqUser, res: Response) {
    const data = await ordersService.validateAddBody(req.body);
    const order = await ordersService.add(req.user.id);
    await productsService.edit(data.productsIds, order.id);
    res.status(201).json({ 
      userId: order.userId,
      productsIds: data.productsIds,
    });
  },
};

export default ordersController;