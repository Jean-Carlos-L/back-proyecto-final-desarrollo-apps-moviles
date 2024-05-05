import express from 'express';

const router = express.Router();

import userControllers from '../controllers/user.controllers';

router.post('/login', userControllers.login);

router.post('/', userControllers.createUser);

router.put('/:id', userControllers.updateUser);


export default router;