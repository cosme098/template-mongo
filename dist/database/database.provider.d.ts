import * as mongoose from 'mongoose';
export declare const config: {
    provide: string;
    useFactory(): Promise<typeof mongoose>;
};
