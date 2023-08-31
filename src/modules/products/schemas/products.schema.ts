import * as mongoose from 'mongoose';

export const Products = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});

export default { Products };
