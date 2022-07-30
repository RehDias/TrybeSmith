import { Request, Response } from 'express';
import productsService from '../services/products.service';

const productsController = {
  async add(req: Request, res: Response) {
    const data = await productsService.validateAddBody(req.body);
    const product = await productsService.add(data);
    res.status(201).json(product);
  },

  async listAll(_req: Request, res: Response) {
    const products = await productsService.listAll();
    res.json(products);
  },
};

export default productsController;