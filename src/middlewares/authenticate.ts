import { NextFunction, Response } from 'express';
import { readToken } from '../services/utils';
import { ReqUser } from '../types';

const authenticate = (req: ReqUser, _res: Response, next: NextFunction) => {
  const data = readToken(req.headers.authorization);
  req.user = data;
  next();
};

export default authenticate;