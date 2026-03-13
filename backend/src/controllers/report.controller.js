import Product from '../models/product.model.js';
import Supplier from '../models/supplier.model.js';
import StockMovement from '../models/stockMovement.model.js';

// GET /api/reports/dashboard
export const getDashboardStats = async (req, res) => {
  try {
    const [products, supplierCount, recentMovements] = await Promise.all([
      Product.find(),
      Supplier.countDocuments(),
      StockMovement.find()
        .populate('product', 'name sku')
        .populate('performedBy', 'name')
        .sort({ createdAt: -1 })
        .limit(10),
    ]);

    const totalProducts = products.length;
    const lowStock = products.filter(p => p.quantity <= p.lowStockThreshold).length;
    const stockValue = products.reduce((sum, p) => sum + p.quantity * p.price, 0);

    res.json({
      totalProducts,
      lowStock,
      suppliers: supplierCount,
      stockValue: `$${stockValue.toLocaleString()}`,
      recentMovements,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
