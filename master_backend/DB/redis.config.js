import redis from "express-redis-cache"

const redisCache = redis({
    //redis cloud ka host
    host: 'redis-16341.c266.us-east-1-3.ec2.redns.redis-cloud.com',
    port: 16341,
    //password
    auth_pass: 'yDpNzNtXwOIoQOdl9jmZgVmxwzeFq2mx',
    prefix:"master_backend",
    // 1 hour cache 
    expire:60*60
});

export default redisCache