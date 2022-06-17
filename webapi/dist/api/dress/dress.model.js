"use strict";
exports.__esModule = true;
exports.Dress = void 0;
var mongoose = require("mongoose");
var DressSchema = new mongoose.Schema({
    code: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    designation: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    prix: {
        type: String
    },
    dressType: {
        type: String,
        "default": 'voilé'
    }
});
exports.Dress = mongoose.model('Dress', DressSchema);
