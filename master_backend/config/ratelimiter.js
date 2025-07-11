import rateLimit from "express-rate-limit"
//kya limit set karni hai 
export const limiter=rateLimit({
    windowMs:1*60*1000,//time in milli sec
    limit:1,//how many request limits we want
    standardHeaders:"draft-7",
    legacyHeaders:true
})

