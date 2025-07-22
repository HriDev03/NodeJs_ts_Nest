const os=require("os")

//which os we are using 
console.log("OS PLATFORM : ", os.platform());

//architecture of out operating system , 64 bits etc
console.log("OS Architecture : ", os.arch());

//number of logical cores 
//Returns an array of objects containing information about each logical CPU core. 
console.log("CPU Cores :",os.cpus().length);

// system kitni der se chal raha hai since our last reeboot
console.log("Uptime (in sec):", os.uptime());

// how much free memory is present
console.log("Free memory : ",os.freemem());

//how much total memory is there in our system
console.log("total memory : ",os.totalmem());

//name of host
console.log("Host Name : ",os.hostname());

//user info
console.log("User Info : ",os.userInfo());

//home dir
console.log("Home Directory : ",os.homedir());







