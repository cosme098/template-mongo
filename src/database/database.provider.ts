import * as mongoose from 'mongoose';

export const config = {
  provide: 'database',
  useFactory() {
    return mongoose.connect('mongodb://localhost:27017/test', {
      autoCreate: true,
    });
  },
};
