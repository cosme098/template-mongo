import { Model } from 'mongoose';
import { Products } from './modules/products/schemas/products.schema';
export declare class AppService {
    readonly productSchema: Model<typeof Products>;
    constructor(productSchema: Model<typeof Products>);
    test(): void;
}
