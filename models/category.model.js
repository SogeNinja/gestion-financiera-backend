import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, unique: true, trim: true, required: true,},
  description: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Category = model('Category', categorySchema);

export default Category;
