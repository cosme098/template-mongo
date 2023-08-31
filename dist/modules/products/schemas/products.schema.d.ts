import * as mongoose from 'mongoose';
export declare const Products: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    age?: number;
    breed?: string;
}, mongoose.Document<unknown, {}, {
    name?: string;
    age?: number;
    breed?: string;
}> & {
    name?: string;
    age?: number;
    breed?: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
declare const _default: {
    Products: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        name?: string;
        age?: number;
        breed?: string;
    }, mongoose.Document<unknown, {}, {
        name?: string;
        age?: number;
        breed?: string;
    }> & {
        name?: string;
        age?: number;
        breed?: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
};
export default _default;
