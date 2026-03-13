import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { getMovements, recordMovement } from '../controllers/stock.controller.js';

const router = express.Router();

router.use(protect);

router.get('/', getMovements);
router.post('/', recordMovement);

export default router;