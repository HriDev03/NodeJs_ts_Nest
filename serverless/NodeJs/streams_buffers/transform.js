// TRANSFORM ARE A SPECIAL CASEOF DUPLEX IT CAN DO OTH READABLE AND WRITEABLE STREAMS


const fs=require("fs");
const path = require("path");

const {Transform}=require("stream");

//read the data , transform the data and write that data
const inputFilePath=path.join(__dirname,"input.txt")
const transformOutputFilePath=path.join(__dirname,"transform.txt")

const readStream=fs.createReadStream(inputFilePath,{encoding:"utf-8"});

const writeStream=fs.createWriteStream(transformOutputFilePath);

//Transform Data
const upperCaseTransform=new Transform({
    // transform function ka use karke chunk ko uppper case mai convert krr diya
    transform(chunk,encoding,callback){
        //transform logic
        this.push(chunk.toString().toUpperCase());
        callback();//callback will call this for next chunk
    }
})

readStream.pipe(upperCaseTransform).pipe(writeStream)


