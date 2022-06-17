"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var contrat_router_1 = require("./api/contract/contrat-router");
var UserController_1 = require("./api/Users/UserController");
var customer_controller_1 = require("./api/customer/customer.controller");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/contrat', contrat_router_1["default"]);
app.use('/api/users', UserController_1["default"]);
app.use('/api/customer', customer_controller_1["default"]);
var MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/cqrsDb';
mongoose.connect(MONGO_URL)
    .then(function (result) { return app.listen(PORT, function () {
    console.log("Server started at port ".concat(PORT));
}); })["catch"](function (err) { return console.log(err); });
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World');
});
