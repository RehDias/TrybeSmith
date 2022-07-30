import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import productsRoute from './routes/products.routes';
import usersRoute from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use(errorHandler);

export default app;
