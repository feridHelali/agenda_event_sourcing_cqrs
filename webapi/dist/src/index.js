'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

(async function () {
    return await _mongoose2.default.connect('mongodb://localhost:27017/eventDb').then(function (conn) {
        console.log('connected to mongodb');
    }).catch(function (error) {
        return console.error(error);
    });
})();

app.listen(3000, function () {
    return console.log('listening on port 3000');
});