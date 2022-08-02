import { NextFunction, Request, Response } from 'express';

const codeErrors: Record<string, number> = {
  ValidationError: 400,
  Unauthorized: 401,
};

const errorHandler = (e: Error, _req: Request, res: Response, _next: NextFunction) => {
  const code = codeErrors[e.name];
  if (!code) return res.status(500).json({ message: e.message });
  if (e.message.includes('must')) {
    return res.status(422).json({ message: e.message });
  }
  res.status(code).json({ message: e.message });
};

export default errorHandler;