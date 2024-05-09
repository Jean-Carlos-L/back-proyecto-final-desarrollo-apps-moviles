import express from 'express';

const router = express.Router();

import userControllers from '../controllers/user.controllers';
import { verifyTokenMiddleware } from '../../middlewares/auth.middleware';

router.post('/login', userControllers.login);

router.use(verifyTokenMiddleware);

router.post('/', userControllers.createUser);

router.put('/:id', userControllers.updateUser);


export default router;