import express from 'express';
import syncController from '../controllers/sync.controller';

const router = express.Router();

router.get('/sync_local', syncController.getQuerysToSyncLocal);
router.post('/sync_remote', syncController.getQuerysToSyncRemote);

export default router;