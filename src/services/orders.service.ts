import Joi from 'joi';
import ordersModel from '../models/orders.model';
import { Orders } from '../types';

const ordersService = {
  async validateAddBody(data: unknown) {
    const schema = Joi.object({
      productsIds: Joi.array().items(
        Joi.number(),
        Joi.number(),
      ).min(1).required()
        .label('productsIds')
        .messages({
          'array.min': '"productsIds" must include only numbers',
        }),
    });
    const result = await schema.validateAsync(data);
    return result;
  },

  async list(): Promise<Orders[]> {
    const orders = await ordersModel.list();
    return orders as Orders[];
  },

  async add(userId: number): Promise<Orders> {
    const order = await ordersModel.add(userId);
    return order;
  },
};

export default ordersService;