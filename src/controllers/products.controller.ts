import { Request, Response } from 'express';
import productsService from '../services/products.service';

const productsController = {
  async add(req:Request, res:Response) {
    const data = await productsService.validateAddBody(req.body);
    const product = await productsService.add(data);
    res.status(201).json(product);
  },
};

export default productsController;