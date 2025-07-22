const fs=require("fs");
const path = require("path");
const inputFilePath=path.join(__dirname,"input.txt")
const outputFilePath=path.join(__dirname,"output.txt")

//creating a read stream to read data from the input file
const readStream=fs.createReadStream(inputFilePath,{encoding:"utf-8"})

//creating write stream
const writeStream=fs.createWriteStream(outputFilePath);

//first read the data and then pass it to the write stream
readStream.pipe(writeStream)

writeStream.on("finish",()=>{
    console.log("Data has been written ");
})