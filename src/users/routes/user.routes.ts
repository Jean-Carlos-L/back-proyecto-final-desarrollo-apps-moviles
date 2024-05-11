import express from 'express';

const router = express.Router();

import userControllers from '../controllers/user.controllers';
import { verifyTokenMiddleware } from '../../middlewares/auth.middleware';

router.post('/login', userControllers.login);

router.post('/', userControllers.createUser);

router.use(verifyTokenMiddleware);

router.put('/:id', userControllers.updateUser);

router.put('/updateConfiguration/:id', userControllers.updateThemeNotification);

export default router;