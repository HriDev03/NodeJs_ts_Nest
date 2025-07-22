const fs=require("fs")

fs.unlink("./fileToDelete.txt",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file deleted sucessfully");
    }
})