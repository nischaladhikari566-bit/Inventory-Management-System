import express from 'express';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { getUsers, toggleUserActive } from '../controllers/user.controller.js';

const router = express.Router();

router.use(protect, adminOnly);

router.get('/', getUsers);
router.patch('/:id/toggle', toggleUserActive);

export default router;