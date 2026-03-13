import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import {
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from '../controllers/supplier.controller.js';

const router = express.Router();

router.use(protect);

router.get('/', getSuppliers);
router.post('/', createSupplier);
router.put('/:id', updateSupplier);
router.delete('/:id', deleteSupplier);

export default router;