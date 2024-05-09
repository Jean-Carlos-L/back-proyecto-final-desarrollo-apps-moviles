import express from 'express';

const router = express.Router();

import taskControllers from '../controllers/task.controllers';
import { verifyTokenMiddleware } from '../../middlewares/auth.middleware';

router.use(verifyTokenMiddleware)

router.post('/', taskControllers.createTask);

router.get('/', taskControllers.getTasks);

router.get('/:id', taskControllers.getTaskById);

router.put('/:id', taskControllers.updateTask);

router.delete('/:id', taskControllers.deleteTask);

export default router;