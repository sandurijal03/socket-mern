import { Router } from 'express';
import commentCtrl from '../controllers/commentCtrl';

const router = Router();

router.get('/comments/:id', commentCtrl.getComments);

export default router;
