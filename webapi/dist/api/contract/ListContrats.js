"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var ListContrats = new mongoose.Schema({
    dateContrat: {
        type: Date,
        required: true
    },
    customer: Object,
    dress: Object,
    service: Array,
    status: {
        type: String,
        required: true,
        "default": 'En cours'
    }
}, {
    timestamps: true
});
exports["default"] = mongoose.model('ListContrat', ListContrats);
