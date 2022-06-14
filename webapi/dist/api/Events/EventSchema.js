"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var EventSchema = new mongoose.Schema({
    action: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    timestamp: {
        type: Date,
        "default": Date.now
    },
    payload: {
        type: Object
    }
}, {
    timestamps: true
});
exports["default"] = mongoose.model('EventSchema', EventSchema);
