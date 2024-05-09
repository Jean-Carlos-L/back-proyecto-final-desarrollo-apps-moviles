import { Request, Response, NextFunction } from "express";
import { verifyToken } from '../utils/jwt.utils'
import { User } from "../users/models/user.models";

export const verifyTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
   const token = req.header('Authorization')?.split(' ')[1];
   if (!token) {
      // Respuesta de error para informar que no se ha enviado el token
      return res.status(401).send('Access Denied: No token provided');
   }

   const payload = verifyToken<User>(token);
   if (!payload) {
      return res.status(403).send('Access Denied: Invalid tokend');
   }

   if (typeof payload === 'object') {
      req.body = Object.assign({}, req.body, { userSession: payload });
   }
   return next();
}
