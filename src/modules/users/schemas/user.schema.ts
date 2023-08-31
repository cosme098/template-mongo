import * as mongoose from 'mongoose';

const Users = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
export default { Users };
