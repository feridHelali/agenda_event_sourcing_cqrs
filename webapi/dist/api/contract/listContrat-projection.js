"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var ListContrat = new mongoose.Schema({
    dateContrat: {
        type: Date,
        required: true
    },
    cunstomer: {
        fullName: {
            type: String
        },
        address: {
            type: String
        },
        phone: {
            type: String
        }
    },
    robes: Array,
    service: Array,
    status: {
        type: String,
        required: true,
        "default": 'En cours'
    }
}, {
    timestamps: true
});
exports["default"] = mongoose.model('ListContrat', ListContrat);
