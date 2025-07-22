import winston from "winston";


export const logger = winston.createLogger({
    //Minimum level to log set krr rahe hai , info , warn , error
    level: 'info', 
    //kis format mai chahiye with timestamps and json format
    format: winston.format.combine(
        // we want timestamp and json 
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    // Required: define where logs go (transports)
    transports: [
    //logs ko kaha bhejna hia 
    new winston.transports.Console(), // Log to console
    //sirf error ke loga ko bhejna hai 
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Errors only
    // Saare logs combined yaha milege
    new winston.transports.File({ filename: 'logs/logs.log' }) // Everything
  ]
});


export default logger