import jwt from 'jsonwebtoken';
const TOKEN_SECRET = process.env.TOKEN_SECRET ?? 'secret';

export const verifyToken = <T>(token: string): T | Boolean => {
   try {
      return jwt.verify(token, TOKEN_SECRET) as T;
   } catch (error) {
      return false;
   }
}

export const createToken = <T extends string | object | Buffer>(payload: T): string => {
   return jwt.sign(payload, TOKEN_SECRET);
}
