"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var DressRentContractSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    dresses: Array,
    beautyServices: Array,
    scheduleRentDate: {
        type: Date
    },
    scheduleReturnDate: {
        type: Date
    },
    rentPrice: {
        type: Number,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    observations: {
        type: String
    }
}, {
    timestamps: true
});
exports["default"] = mongoose.model('DressRentContract', DressRentContractSchema);
