import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserProps {
    id: string;
    name: string,
    lastName: string,
}

export interface AuthenticatedRequest extends Request {
    user?: UserProps;
}

export function authenticateToken(req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  if(process.env.JWT_SECRET_KEY){
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
      });
  }
};