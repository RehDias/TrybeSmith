import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import authenticate from '../middlewares/authenticate';

const ordersRoute = Router();

ordersRoute.post('/', authenticate, ordersController.add);
ordersRoute.get('/', ordersController.list);

export default ordersRoute;