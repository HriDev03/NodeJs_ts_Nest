const {exec} = require('child_process')
const { error } = require('console')
const { stdout, stderr } = require('process')

//with the help of exec method we can run commands  the shell and can get output inside the shell
//node js process are single threaded
//writing command in shell and getting output back in the terminal 

//to see all the files in human readable form
//callback : error , stdout:for output inside the console , stderr: for any errors inside the terminal
exec('dir',(error,stdout,stderr)=>{
    //storing all the files in the buffer and showing them 
    //error when the cmd is not found or error in execution is there
    if(error){
        //if there is some error while executing
        console.log("Error Block trigerred : ");
        console.log(`error : ${error.message}`);
        return 
    }

    //command has been executed but there is some error in the terminal 
    //std error : error which happens when the command has been executed
    if(stderr){
        console.log("STDERR block triggered:");
        console.log(`stderr : ${stderr}`);
        return 
    }

    //if everything works fine you can just clg the standard output 
    console.log(`Stdout:${stdout}`);

})


exec("copy spawn_demo.js dummyfile.js",{maxBuffer:1024*1024*4 },(error,stdout,stderr)=>{
    // error in executing the command
    if(error){
        return console.log(error);
    }

    if(stderr){
        return console.log(stderr);
    }

    console.log(stdout);

})

//exec and exec file cant be used for large outputs as their maxBuffer length will be execeed
//spawn returns as a stream : can send huge res over a period of time 
// exec waits for the buffer to be filled first and once filled gives the whole output

//when res is huge use spawn 
//they are async and dont bloack the main thread




