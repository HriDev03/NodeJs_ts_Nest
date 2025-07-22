// will practice about error handlings and uncaught exceptions and graceful shutdowns
const http=require("http")

let dbConnected = false;

// Simulated DB connect
function connectDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      dbConnected = true;
      console.log("✅ Mock DB connected.");
      resolve();
    }, 1000);
  });
}

// Simulated DB close
function closeDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      dbConnected = false;
      console.log("🛑 Mock DB closed.");
      resolve();
    }, 1000);
  });
}


const server = http.createServer((req, res) => {
  if (req.url === "/") return res.end("✅ Server is running");

  if (req.url === "/crash") throw new Error("💥 Crash route hit");

  res.writeHead(404);
  res.end("❌ Not found");

});

async function gracefulShutdown(exitCode = 0) {
  console.log("🧹 Cleaning up before shutdown...");
  try {
    await closeDB();
    server.close(() => {
      console.log("✅ Server closed cleanly.");
      process.exit(exitCode);
    });
  } catch (err) {
    console.error("Error during shutdown:", err);
    process.exit(1);
  }
}

//when we press ctrl+c
process.on('SIGINT',gracefulShutdown)
//used in aws : kill signal 
process.on('SIGTERM', gracefulShutdown);




async function testTryCatch(){
    try{
        const fake=await promise.reject("inside try catch for manual error handling")
    }catch(err){
        console.log("error aa gaya inside try/catch : ",err);
    }
}
testTryCatch()

// unhandler error(Sync throw new types)
setTimeout(() => {
  throw new Error('Uncaught exception occurred sync');
}, 10000);


// Unhandled rejection (Async)
setTimeout(() => {
    //this is only returning a string not an error object
  Promise.reject('Unhandled promise rejection!');
  //now this is returning an error object in promise.reject()
  Promise.reject(new Error("unhandeled promise rejection "))
}, 10000);

//for sync errors 
process.on('uncaughtException',(err)=>{
    console.log("there is an uncaught error : ",err.message);
    process.exit(1)
})

// for async errors 
process.on('unhandledRejection', (err) => {
  console.error("Unhandled Rejection:", err.message || err);
  process.exit(1);
});

// Start server
(async () => {
  await connectDB();
  server.listen(8000, () => {
    console.log("🚀 Server listening on port 8000");
  });
})();
