// code inside child process files executes the moment we create a fork in a parent process file
console.log("Child Process Started");

//all the argumnets sent
console.log(process.argv);

// Listen for message from parent
process.on("message", (msg) => {
    // console.log("📩 Message from parent:", msg);

    // Send a message back to parent
    process.send({ message: "hello parent child process here" });

    // Exit after sending message
    process.exit(0);
});

