import rateLimit from "express-rate-limit"
//kya limit set karni hai 
export const limiter=rateLimit({
    //time in milli sec 60,000 mill secs = 60 sec= 1 min
    windowMs:1*60*1000,
    //kitni requests we want per min
    limit:8,
    standardHeaders:"draft-7",
    legacyHeaders:true
})

