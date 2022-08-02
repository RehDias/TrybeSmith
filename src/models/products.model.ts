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

  async listAll(): Promise<Products[]> {
    const sqlQuery = 'SELECT * FROM Trybesmith.Products';
    const [products] = await connection.execute(sqlQuery);
    return products as Products[];
  },

  async edit(data: number[], orderId: number) {
    const sqlQuery = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await Promise.resolve(data
      .map((productId) => connection.execute(sqlQuery, [orderId, productId])));
  },
};

export default productsModel;