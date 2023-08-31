"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Users = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});
exports.default = { Users };
//# sourceMappingURL=user.schema.js.map