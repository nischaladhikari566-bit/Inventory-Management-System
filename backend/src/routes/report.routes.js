import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { getDashboardStats } from '../controllers/report.controller.js';

const router = express.Router();

router.use(protect);

router.get('/dashboard', getDashboardStats);

export default router;