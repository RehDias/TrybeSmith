import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'jwtSecret';

export const createToken = async (data: object): Promise<string> => {
  const token = jwt.sign(data, secret);
  return token;
};

export const readToken = (token: string) => {
  try {
    const data = jwt.verify(token, secret);
    return data;
  } catch (error) {
    // if (!token || token === undefined) throwError('Unauthorized', 'Token not found');
    // throwError('Unauthorized', 'Expired or invalid token');
  }
};
