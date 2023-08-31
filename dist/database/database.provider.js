"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const mongoose = require("mongoose");
exports.config = {
    provide: 'database',
    useFactory() {
        return mongoose.connect('mongodb://localhost:27017/test', {
            autoCreate: true,
        });
    },
};
//# sourceMappingURL=database.provider.js.map