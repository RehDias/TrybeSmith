import jwt from 'jsonwebtoken';
import UnauthorizedError from '../err/unauthorized';

const secret = process.env.JWT_SECRET || 'jwtSecret';

export const createToken = async (data: object): Promise<string> => {  
  const token = jwt.sign(data, secret);
  return token;
};

export const readToken = (token: undefined | string) => {
  try {
    if (!token) throw new UnauthorizedError('Token not found');
    const data = jwt.verify(token, secret);
    return data;
  } catch (error) {
    if (!token) throw new UnauthorizedError('Token not found');
    throw new UnauthorizedError('Invalid token');
  }
};
