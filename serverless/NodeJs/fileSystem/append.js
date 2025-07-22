
const fs=require('fs');

// when we enter it , itll be appended to a brand new line 
const additionalNotes="\n Appending a file is also what we can do";

fs.appendFile("output.txt",additionalNotes,'utf-8',(err)=>{
    if(err){
        return console.log(err);
    }else{
        console.log("Appended file");
    }
})

try {
    fs.appendFileSync("notes.txt",additionalNotes,'utf-8')
} catch(error){
    console.log("some error occurred : ",error);
}
