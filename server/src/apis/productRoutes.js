import { Router } from 'express';
import productCtrl from '../controllers/productCtrl';

const router = Router();

router.get('/products', productCtrl.getProducts);
router.patch('/products/:id', productCtrl.reviews);

export default router;
