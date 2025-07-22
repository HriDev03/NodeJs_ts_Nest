const fs=require("fs")
try {
    fs.mkdirSync("VeryImportantFiles")
    console.log("Directory made sucessfully");

    //writing files in the folder
    console.log("Creating A File ........");
    fs.writeFileSync("./VeryImportantFiles/file1","hey this is file1 of very inportant files folder",'utf-8')

    console.log("Files created Sucessfully .....");
    
    console.log("READING FILES Present in the directory ..... ");
    const files=fs.readdirSync("VeryImportantFiles")
    console.log(files);
    console.log("Files Read");


    //deleting files in the directory
    for(let i =0;i<files.length;i++){
        const file=files[i];
        fs.unlinkSync(`./VeryImportantFiles/${file}`)
    }
    //deleting the whole folder : To do this you need to remove all the files first
    fs.rmdirSync("VeryImportantFiles")
    console.log("Folder deleted Sucessfully . ");
} catch (error) {
    console.log(error);
}