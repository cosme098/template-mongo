"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose = require("mongoose");
exports.Products = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});
exports.default = { Products: exports.Products };
//# sourceMappingURL=products.schema.js.map