import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient({
    //to log our querry
    log:["query","error"]
});

//now we dont need to do  
export default prisma;

