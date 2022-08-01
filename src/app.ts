import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import loginRoute from './routes/login.routes';
import ordersRoute from './routes/orders.routes';
import productsRoute from './routes/products.routes';
import usersRoute from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/orders', ordersRoute);
app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use(errorHandler);

export default app;
