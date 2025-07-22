//what is read stream
const path=require("path")
const fs=require("fs")

const inptFilePath=path.join(__dirname,"input.txt")

//it implements thereadable stream 
const readStream=fs.createReadStream(inptFilePath,{encoding:'utf-8'});

//jab data aaye ga 
readStream.on("data",(chunk)=>{
    console.log("Received a chunk :",chunk);
})

//jab data aana band ho jaaye ga 
readStream.on("end",()=>{
    console.log("finished reading data of the file");
})

//if there is some error
readStream.on("error",()=>{
    console.log("An Error occurred while reading ");
})