import { Request, Response } from 'express';
import userServices from '../services/user.services';
import { encryptPassword, comparePassword } from '../../utils/password.utils';
import { createToken } from '../../utils/jwt.utils';
import { User } from '../models/user.models';
import { UserUpdate } from '../types/user';

const login = async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         res.status(422).json({
            message: 'Please provide email and password',
         });
         return;
      }

      const user = await userServices.getUserByEmail(email);
      if (user.length === 0) {
         res.status(401).json({
            message: 'Incorrect email',
         });
         return;
      }

      const isPasswordCorrect = await comparePassword(password, user[0].password);

      if (!isPasswordCorrect) {
         res.status(401).json({
            message: 'Incorrect password',
         });
         return;
      }

      const userObject: User = {
         id: user[0].id,
         email: user[0].email,
         username: user[0].username,
         password: user[0].password,
         theme: user[0].theme,
         notification: user[0].notification,
         state: user[0].state,
         create_at: user[0].create_at,
         update_at: user[0].update_at,
      };
      const token = createToken<User>(userObject);
      res.status(200).json({
         message: 'User logged in successfully',
         user: userObject,
         token,
      });
   } catch (error) {
      console.error(error)
      res.status(500).json('Error in login function');
   }
}

const createUser = async (req: Request, res: Response) => {
   try {
      const { username, email, password } = req.body;
      console.log('req.body', req.body)
      if (!username || !email || !password) {
         res.status(422).json({
            message: 'Please provide username, email and password',
         });
         return;
      }

      const existingUser = await userServices.getUserByEmail(email);
      if (existingUser.length > 0) {
         res.status(409).json({
            message: 'Email already exists',
         });
         return;
      }

      const passwordEncrypted = await encryptPassword(password);
      userServices.createUser({ username, email, password: passwordEncrypted });

      res.status(201).json({
         message: 'User created'
      });
   } catch (error) {
      res.status(500).json('Error in createUser function');
   }
}

const updateUser = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const { username, email, password, notification, theme } = req.body;

      if (!username || !email || !notification || !theme) {
         res.status(422).json({
            message: 'Please provide username, email, password, notification and theme',
         });
         return;
      }

      const existingUser = await userServices.getUserByEmail(email);
      if (existingUser.length > 0 && existingUser[0].id !== parseInt(id)) {
         res.status(404).json({
            message: 'Email already exists',
         });
         return;
      }

      const passwordEncrypted = await encryptPassword(password);
      const editUser: UserUpdate = { id: parseInt(id), username, email, theme, notification }
      if (password) {
         editUser.password = passwordEncrypted;
      }
      userServices.updateUser(editUser);

      res.status(200).json({
         message: 'User updated'
      });
   } catch (error) {
      res.status(500).json('Error in updateUser function');
   }
}

const updateThemeNotification = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const { theme, notification } = req.body;

      if (!theme && !notification) {
         res.status(422).json({
            message: 'Please provide theme or notification',
         });
         return;
      }

      userServices.updateThemeNotification({ id: parseInt(id), theme, notification });

      res.status(200).json({
         message: 'Configuration updated'
      });
   } catch (error) {
      res.status(500).json('Error in updateThemeNotification function');
   }
}

export default {
   login,
   createUser,
   updateUser,
   updateThemeNotification
};