
const fs= require("fs")//fs module ko fethch krr liya

//reading file
// name , file spec , what function to run when file has been read sucessfully
// THIS IS AN ASYNC FUNCTION 
fs.readFile("./notes.txt",'utf-8',(error,data)=>{
    if(error){
        return console.log(error);
    }
    console.log(data);
})

//try catch ki error naa aaye 
try {
    const infoFile=fs.readFileSync("./info.txt",'utf-8') // syncronously file reading
    console.log(infoFile);
}catch(error){
    console.log(error);
}
//will wate for the file to totally read before other codes
console.log("file system server");


//WRITING TO A FILE
const content="WELCOME TO MY SERVER WE ARE WRITING IN A FILE HERE "
//sync  way and async way

//async way : file name , content that we wil pass , 
// encoding, error handling callback
fs.writeFile("output.txt",content,"utf-8",(error)=>{
    if(error){
        return console.log(error);
    }else{
        console.log("Done writitng to the file");
    }
})

try{
    fs.writeFileSync("outputSync.txt",content,'utf-8')
    console.log(" Writing file in a sync way here ");
}catch(err){
    console.log(err);
}