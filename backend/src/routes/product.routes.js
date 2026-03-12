import express from 'express';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protect, (req, res) => res.json({ message: 'product route working' }));

export default router;