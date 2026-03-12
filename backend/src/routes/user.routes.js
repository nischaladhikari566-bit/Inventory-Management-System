import express from 'express';
import { protect, adminOnly } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protect, adminOnly, (req, res) => res.json({ message: 'user route working' }));

export default router;