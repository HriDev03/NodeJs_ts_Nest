const {Readable} = require("stream");

class customReadableStream extends  Readable{
    constructor(options){
        super(options)
        this.maxNumber=10;
        this.generatedNumbers=0;
    }
    //read method hia yeh 
    _read(){
        if(this.generatedNumbers>=this.maxNumber){
            this.push(null)
        }else{
            const randomNumber=Math.floor(Math.random()*1000);
            const buffer=Buffer.from(randomNumber.toString(),"utf-8");
            this.push(buffer)
            this.generatedNumbers+=1;
        }
    }
}

const randomNumberStream=new customReadableStream();

randomNumberStream.on("data",(chunk)=>{
    console.log("received : ",chunk.toString("utf-8"));
})

randomNumberStream.on("end",()=>{
    console.log("ended reading file with the help of custom read stream");
})

randomNumberStream.on("error",(err)=>{
    console.log("error aa gaya",err);
})

https://www.youtube.com/watch?v=Eswjc6UH-RA events 