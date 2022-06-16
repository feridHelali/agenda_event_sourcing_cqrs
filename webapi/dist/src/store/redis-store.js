'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redisStore = undefined;

var _redis = require('redis');

var redisStore = exports.redisStore = async function redisStore() {
    var client = (0, _redis.createClient)();

    client.on('connect', function () {
        console.log('Connected!');
    });

    client.on("error", function (error) {
        return console.log(error);
    });

    await client.connect().then(function (_) {
        return console.log('connected to redis');
    });

    var subscriber = client.duplicate();
    var pubblisher = client.duplicate();

    await subscriber.connect();
    await subscriber.subscribe("contract-created", function (message) {
        console.log(message);
    });
    await publisher.publish('contract-created', 'message');
};