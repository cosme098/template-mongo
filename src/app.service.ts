import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Products } from './modules/products/schemas/products.schema';

@Injectable()
export class AppService {
  constructor(
    @Inject('productSchema') readonly productSchema: Model<typeof Products>,
  ) {}

  test() {
    this.productSchema.create({
      name: 'cosme',
      age: 10,
      breed: 'String',
    });
  }
}
