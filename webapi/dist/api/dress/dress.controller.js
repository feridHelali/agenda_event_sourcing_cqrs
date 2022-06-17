"use strict";
exports.__esModule = true;
var express = require("express");
var dress_service_1 = require("./dress.service");
var router = express.Router();
router.post('/add', dress_service_1.addDress);
exports["default"] = router;
