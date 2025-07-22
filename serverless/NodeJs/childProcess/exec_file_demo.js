//how to use exec_file method of child processes
const {execFile} =require('child_process')

//here we need to pass an exectable file
execFile('node', ['somefile.js'],(error,stdout,stderr)=>{
    
    if(error){
        console.log(`error : ${error.message}`);
        return;
    }

    if(stderr){
        console.log(`stderr : ${stderr}`);
        return;
    }
    console.log(`stdout : ${stdout}`);


})

//exec and exec file cant be used for large outputs as their maxBuffer length will be execeed
//exec file does not run our commands inside a shell , spawns file as a new child process 
