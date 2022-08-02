import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Orders } from '../types';
import connection from './connection';

const ordersModel = {
  async list() {
    const sqlQuery = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(pr.id) AS productsIds
      FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products AS pr
      ON ord.id = pr.orderId
      GROUP BY ord.id
      ORDER BY ord.userId`;
    const [orders] = await connection.execute<RowDataPacket[]>(sqlQuery);
    return orders;
  },

  async add(userId: number): Promise<Orders> {
    const sqlQuery = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [{ insertId }] = await connection.execute<ResultSetHeader>(sqlQuery, [userId]);
    return { id: insertId, userId };
  },
};

export default ordersModel;