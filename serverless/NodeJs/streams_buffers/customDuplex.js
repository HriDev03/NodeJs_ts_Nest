// const {Duplex}=require("stream")

// //trasform is special case of transform
// //zlib a special case of transform stream 
// const zlib=require("zlib")
// class CustomDuplex extends Duplex{
//     constructor(){
//         super();
//     }

//     // we can use both readable and writeable interfaces
//     _read(){

//     }

//     _write(){

//     }
//     _final(){

//     }
// }

// const duplexStream=new CustomDuplex();
// console.log(duplexStream);


//ZIPPING A FILE
const zlib=require('zlib');
const gzip=zlib.createGzip();
const fs=require('fs');
const imp=fs.createReadStream('input.txt')
//file we want to output: this is a zipped file
const out=fs.createWriteStream('input.txt.gz')

//this is the main code which is doing the execution
imp.pipe(gzip).pipe(out)

//UNZIPPING A FILE
//decompress input.txt.gz
const zlib=require('zlib')
const unzip=zlib.createUnzip();
const fs=require('fs')
const input=fs.createReadStream('input.txt.gz')
const outPut=fs.createWriteStream('input2.txt')
input.pipe(unzip).pipe(outPut)

