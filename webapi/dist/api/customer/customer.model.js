"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var mongoose = require("mongoose");
var CustomerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    phone: {
        type: String
    }
});
exports.Customer = mongoose.model('Customer', CustomerSchema);
