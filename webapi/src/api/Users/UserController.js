"use strict";
exports.__esModule = true;
var express = require("express");
var UserService_1 = require("./UserService");
var router = express.Router();
router.route('/')
    .post(UserService_1["default"].register)
    .get(UserService_1["default"].login);
exports["default"] = router;
