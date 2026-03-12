import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  sku: { type: String, required: true, unique: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  price: { type: Number, required: true, default: 0 },
  costPrice: { type: Number, default: 0 },
  quantity: { type: Number, default: 0 },
  lowStockThreshold: { type: Number, default: 10 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

productSchema.virtual('isLowStock').get(function () {
  return this.quantity <= this.lowStockThreshold;
});

productSchema.virtual('totalValue').get(function () {
  return this.quantity * this.price;
});

export default mongoose.model('Product', productSchema);