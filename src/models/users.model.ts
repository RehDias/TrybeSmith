import { ResultSetHeader } from 'mysql2';
import { AddUsers } from '../types';
import connection from './connection';

const usersModel = {
  async add(data: AddUsers): Promise<void> {
    const sqlQuery = `INSERT INTO Trybesmith.Users 
      (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    await connection.execute<ResultSetHeader>(
      sqlQuery,
      [data.username, data.classe, data.level, data.password],
    );
  },
};

export default usersModel;