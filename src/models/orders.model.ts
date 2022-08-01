import { RowDataPacket } from 'mysql2';
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
};

export default ordersModel;