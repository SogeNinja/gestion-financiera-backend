import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const budgetSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true, enum: ['income', 'expense']  },
  limit: { type: Number, required: true },
  startDate: { type: Number, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Budget = model('Budget', budgetSchema);

export default Budget;
