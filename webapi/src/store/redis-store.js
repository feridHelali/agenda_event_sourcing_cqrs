import { createClient } from "redis";

export const redisStore = async () => {
    const client = createClient();

    client.on('connect', function () {
        console.log('Connected!');
    });

    client.on(
        "error", error => console.log(error)
    );

    await client.connect().then(_ => console.log('connected to redis'));

    const subscriber = client.duplicate();
    const pubblisher = client.duplicate();


    await subscriber.connect();
    await subscriber.subscribe("contract-created", (message) => {
        console.log(message);
    });
    await publisher.publish('contract-created', 'message');

}
