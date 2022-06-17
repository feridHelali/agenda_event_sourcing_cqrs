"use strict";
exports.__esModule = true;
var express = require("express");
var customer_service_1 = require("./customer.service");
var router = express.Router();
router.post('/add', customer_service_1.addCustomer);
exports["default"] = router;
