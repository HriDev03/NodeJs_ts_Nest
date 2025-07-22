// it is like all other previous methods spwns a new node js process but also invokes
// a module that creates an ipc : inter process communication channel
//  between child and parent process so 
// that they can send messages during a certain event


// a child variable to hold the instance of child process that we create
// we can pass arguments as an array and inside we can access it by argv
const { fork } = require("child_process");

const child = fork("./child.js", ["arg1", "arg2"]);

child.on("message", (msg) => {
    console.log("📩 Message from child:", msg);
});

// // Send message to child
// child.send("Hello from Parent");

// Listen when child exits:listen to the close event of child(forked) process 
child.on("exit", (code) => {
    console.log(`👋 Child process exited with code: ${code}`);
});

