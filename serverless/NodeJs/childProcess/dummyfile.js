/*


| Feature       | `spawn`                               | `exec`                                        |
| ------------- | ------------------------------------- | --------------------------------------------- |
| **Data Type** | Chunks (Buffers via stream)           | Full output as a **string** (after buffering) |
| **Limit**     | Handles large output efficiently      | Limited (default maxBuffer is 200KB)          |
| **Use case**  | Long-running / large-output processes | Quick commands like `ls`, `pwd`, etc.         |
| **Streaming** | ✅ Yes                                 | ❌ No (buffers entire result)                  |



https://www.youtube.com/watch?v=7cFNTD73N88 fork
https://www.youtube.com/watch?v=9RLeLngtQ3A cluster

*/

// const {spawn}=require('child_process');

// //list all the files using spawn method give command name and give arguments in array
// const child=spawn('dir', { shell: true });

// //listen on sandard output , standard error , on error itself , on exact event of the process
// child.stdout.on('data',(data)=>{
//     console.log(`stdout:${data}`);
// })

// // if error in the terminal 
// child.stderr.on('data',(data)=>{
//     console.log(`stderr : ${data}`);
// })

// //if any error happened
// child.on('error',(error)=>{console.log(`error :${error.message}`);})

// child.stdout.on('end', () => {
//   console.log('✅ Output stream ended.');
// });

// //The child process has exited And its output streams (stdout and stderr) have been fully flushed and closed
// //to see the exact event
// child.on('close',(code,signal)=>{
//     //ctrl+c
//     if(code) console.log(`Process exit with code :${code}`);
//     //code closed by the server
//     if(signal) console.log(`Process killed with signal ${signal}`);
    
//     console.log("Done");
// })

/*

    Node js is single threaded , node js code execution goes from top to bottom
    one line at a time , and this is handled by event loop which executes these async execution very well

    their execution is moved aside to the main thread and executed behind the scenes 
    once we get a response back it is moved to the main thread

    when there is a sync block on a thread that has a lot of load we eed to offload it to another thread
    for an op that takes a lot of resources  like for decrypt and cryption using crypto

    offloaded to keep the main thread free

    a process is the instance of a prog that we run on the system

    an app creates a process when its executed : we get access to the processinformation
    using process object , its globally available 

    mtltitasking : like we came across a block that is having heavy load so node js has a module called 
    child process , we can call a new sup process for the parent process

    offload heavy ops which create blockage

    Spawn : THE SPAWN function will call a command in the process
    the data that we will get will be in form of streams , it is async and when a piece
    of data is ready to be sent as a response itll be sent as an output stream

    and if there is an error itll be passed as std err stream

*/

const {spawn}=require('child_process');

//command to list files

//first way
//to use these commands we need a shell in windows
//telling spawn function to open a shell and then run this command

//second way : we can use the exec method                


//when want to pass any arguments then pass it in an array

let listFiles=spawn("dir",["/b"],{shell:true})

//the spawn method returns data in stream so it returns in the form of chunks
// we need to listen for the stream
// stdout for outpt and strerr for errors

//when our dir commands goes through some issue
listFiles.stderr.on("data",(error)=>{
    console.log(error);
})

//jab output aaye ga usse print krr denge
listFiles.stdout.on("data",(data)=>{
    console.log(data.toString());
})

//when spawn function runs into some issue
listFiles.stdout.on("error",(error)=>{
    console.log("some error :",error);
})
























