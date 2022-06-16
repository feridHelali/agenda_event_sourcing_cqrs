'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var redis = require('redis');
var subscriber = redis.createClient();

var subscriberModule = exports.subscriberModule = function subscriberModule() {
    var channel = 'contract';

    subscriber.subscribe(channel, function (error, channel) {
        if (error) {
            throw new Error(error);
        }
        console.log('Subscribed to ' + channel + ' channel. Listening for updates on the ' + channel + ' channel...');
    });

    subscriber.on('message', function (channel, message) {
        console.log('Received message from ' + channel + ' channel: ' + message);
    });
};