import express from 'express';
import syncController from '../controllers/sync.controller';

const router = express.Router();

router.get('/sync_local', syncController.getQuerysToSyncLocal);

export default router;