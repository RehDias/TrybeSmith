import ordersModel from '../models/orders.model';
import { Orders } from '../types';

const ordersService = {
  async list(): Promise<Orders[]> {
    const orders = await ordersModel.list();
    return orders as Orders[];
  },
};

export default ordersService;