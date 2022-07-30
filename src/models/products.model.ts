import { ResultSetHeader } from 'mysql2';
import { AddProduct, Products } from '../types';
import connection from './connection';

const productsModel = { 
  async add(data: AddProduct): Promise<Products> {
    const sqlQuery = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(sqlQuery, [data.name, data.amount]);
    return { id: insertId, ...data };
  },
};

export default productsModel;