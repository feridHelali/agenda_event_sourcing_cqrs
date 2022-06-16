'use strict';

var redis = require('redis');
var publisher = redis.createClient();

var channel = 'status';

async function publish() {
  console.log('Started ' + channel + ' channel publisher...');
  publisher.publish(channel, 'free');
}

publish();