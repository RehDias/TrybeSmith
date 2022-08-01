import { RowDataPacket } from 'mysql2';
import { Login } from '../types';
import connection from './connection';

const loginModel = {
  async exists(data: Login): Promise<boolean> {
    const sqlQuery = 'SELECT 1 FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [[user]] = await connection.execute<RowDataPacket[]>(
      sqlQuery,
      [data.username, data.password],
    );
    return !!user;
  },

  async getByUsername(username: string) {
    const sqlQuery = 'SELECT id, username FROM Trybesmith.Users WHERE username = ?';
    const [[user]] = await connection.execute<RowDataPacket[]>(sqlQuery, [username]);
    return user;
  },
};

export default loginModel;