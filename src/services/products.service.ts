import Joi from 'joi';
import productsModel from '../models/products.model';
import { Products } from '../types';

const productsService = {
  async validateAddBody(data: unknown) {
    const schema = Joi.object<Products>({
      name: Joi.string().required(),
      amount: Joi.string().required(),
    });
    const body = await schema.validateAsync(data);
    return body;
  },

  async add(body: Products): Promise<Products> {
    const product = await productsModel.add(body);
    return product;
  },

  async listAll(): Promise<Products[]> {
    const products = await productsModel.listAll();
    return products;
  },
};

export default productsService;