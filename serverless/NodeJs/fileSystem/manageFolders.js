// WE WILL LEARN ABOUT DIRECTORY MANAGEMENT HERE
// make a directory , 
// Read that directory : read the contents of that directory , 
// Remove that directory

const fs=require("fs")

//making a directory
fs.mkdir("ImportantFiles",(err)=>{
    if(err){
       return  console.log(err);
    }
    console.log("Folder created sucessfully");
    
    //writing files
    content="hey this an important file inside the inportant folder"
    
    fs.writeFile("./ImportantFiles/file1",content,(err)=>{
        if(err){
            return console.log(err);
        }
        //read the important files dir
        fs.readdir("./ImportantFiles",(err,files)=>{
            if(err){
                return console.log(err)
            }
            console.log(files);
        })
    })
})


// If Nest Fs operation depends on the result of previous fs operation then we can use the syncOperation to make it work




