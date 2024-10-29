import Redis, { createClient } from 'redis';

const redis = createClient({
    url: process.env.REDIS_URL,
})

redis.on('error', function (err) {
    console.log('Redis error: ' + err);
});

redis.on('connect', function () {
    console.log('Redis connected');
});

redis.connect();

export default redis;