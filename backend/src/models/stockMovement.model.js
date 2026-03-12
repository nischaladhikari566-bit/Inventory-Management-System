import mongoose from 'mongoose';

const stockMovementSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  type: { type: String, enum: ['in', 'out', 'adjustment'], required: true },
  quantity: { type: Number, required: true },
  previousQuantity: { type: Number },
  newQuantity: { type: Number },
  reason: { type: String },
  reference: { type: String },
  performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('StockMovement', stockMovementSchema);