import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const transactionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true, enum: ['income', 'expense'] },
  date: { type: Date, required: true },
  note: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Transaction = model('Transaction', transactionSchema);

export default Transaction;
