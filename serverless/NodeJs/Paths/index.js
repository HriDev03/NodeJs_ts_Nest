/*
    Path module provides us utilities for working 
    with files and directory paths
*/


 

//prefix with node to indicate that its a built in module
const path=require("path")

console.log("__________________________");

console.log("Full path: ");
// full path to the file
console.log("file name : ",__filename);

//full path to the folder
console.log("Directory name : ",__dirname);

console.log("________________________________________");

console.log("Base name: ");
// different methods available to the path module
//base name : will return  the last portion of file name and dir name
console.log("file Base name : ",path.basename(__filename));
console.log("Dirr Base name  : ",path.basename(__dirname));

console.log("_____________________________________________");

console.log("Extensions: ");
// extname : will return the extension of the path
console.log("file extensions : ",path.extname(__filename));
console.log("Dirr extensions : ",path.extname(__dirname));

console.log("_________________________________________________");

// parse : it will give us an object who will represent the significant properties of the path
console.log("Paths: ");

console.log("file Paths : ",path.parse(__filename));
console.log("Dirr Paths : ",path.parse(__dirname));

console.log("____________________________________________________________________");
console.log(" is it an Absolute path ");

//is absolute will tell if a path is absolute or not
console.log("file Paths : ",path.isAbsolute(__filename));
console.log("Dirr Paths : ",path.isAbsolute(__dirname));
console.log("Dirr Paths : ",path.isAbsolute("./notes.txt"));

// JOIN : 5:55

https://www.youtube.com/watch?v=4toBhwOj_48&list=PLxoOrmZMsAWyBy3qwWdNhtAi-J4yLK1k9 : aws
https://www.youtube.com/watch?v=p995SdRXw_E : CodeEvolution
https://www.youtube.com/watch?v=yQBw8skBdZU: fs revise
Akshay saini : js
https://www.youtube.com/watch?v=5rG-YgTHMC8:aws digital cloud