"use strict";
exports.__esModule = true;
var express = require("express");
var EventServices_1 = require("./EventServices");
var router = express.Router();
router.route('/')
    .post(EventServices_1["default"].postEvents)
    .get(EventServices_1["default"].getEvents);
exports["default"] = router;
