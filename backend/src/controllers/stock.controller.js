import StockMovement from '../models/stockMovement.model.js';
import Product from '../models/product.model.js';

// GET /api/stock
export const getMovements = async (req, res) => {
  try {
    const movements = await StockMovement.find()
      .populate('product', 'name sku')
      .populate('performedBy', 'name')
      .sort({ createdAt: -1 });
    res.json(movements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/stock
export const recordMovement = async (req, res) => {
  try {
    const { product: productId, type, quantity, reason, reference } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const previousQuantity = product.quantity;
    let newQuantity;

    if (type === 'in') {
      newQuantity = previousQuantity + quantity;
    } else if (type === 'out') {
      if (previousQuantity < quantity) {
        return res.status(400).json({ message: 'Insufficient stock' });
      }
      newQuantity = previousQuantity - quantity;
    } else if (type === 'adjustment') {
      newQuantity = quantity; // direct set
    } else {
      return res.status(400).json({ message: 'Invalid movement type' });
    }

    product.quantity = newQuantity;
    await product.save();

    const movement = await StockMovement.create({
      product: productId,
      type,
      quantity,
      previousQuantity,
      newQuantity,
      reason,
      reference,
      performedBy: req.user.id,
    });

    const populated = await movement.populate([
      { path: 'product', select: 'name sku' },
      { path: 'performedBy', select: 'name' },
    ]);

    res.status(201).json(populated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
