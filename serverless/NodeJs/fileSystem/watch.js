const fs= require("fs");
fs.watch("./output.txt",(eventType,fileName)=>{
    
    console.log(`event type : ${eventType}`);
    console.log(`file Name : ${fileName}`);

    if(eventType==="change"){
        const newContent=fs.readFileSync("./output.txt","utf-8")
        // jo content change hua usse bhi dikha do
        console.log(newContent);
    }

})