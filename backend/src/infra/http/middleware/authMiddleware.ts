import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import jwtConfig from '../../../config/jwt';
import ErrorHandler from '../../../Errors/ErrorHandler';

interface Token {
  iat: number;
  exp: number;
  sub: string;
}

export default function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authExists = req.headers.authorization;

  if (!authExists) {
    throw new ErrorHandler('You are not authenticated', 401);
  }

  const [, token] = authExists.split(' ');

  try {
    const decoded = verify(token, jwtConfig.secret);
    const { sub } = decoded as Token;
    req.user = {
      id: sub,
    };
    return next();
  } catch (err) {
    throw new ErrorHandler('Invalid Token !!', 401);
  }
}
