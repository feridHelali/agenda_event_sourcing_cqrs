const redis = require('redis');
const publisher = redis.createClient();

const channel = 'contract';

async function publish() {
  console.log(`Started ${channel} channel publisher...`)
  await publisher.publish(channel, 'free');
}

