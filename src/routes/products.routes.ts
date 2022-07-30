import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoute = Router();

productsRoute.get('/', productsController.listAll);
productsRoute.post('/', productsController.add);

export default productsRoute;