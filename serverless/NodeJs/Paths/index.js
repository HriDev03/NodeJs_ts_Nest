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

// parse : it will give us an object who will represent the significant properties of the path as an object
console.log("Paths: ");
console.log("file Paths : ",path.parse(__filename));
console.log("Dirr Paths : ",path.parse(__dirname));

//we have format pethod that returns the path string  given an obect
console.log("file path from format : ",path.format(path.parse(__filename)));

//can fetch these properties the same way we fetch in case of an object
// isAbsolute: if it is an absolute path
console.log("____________________________________________________________________");
console.log(" is it an Absolute path ");
//is absolute will tell if a path is absolute or not
console.log("file Paths : ",path.isAbsolute(__filename));
console.log("Dirr Paths : ",path.isAbsolute(__dirname));
console.log("Dirr Paths : ",path.isAbsolute("./notes.txt"));

console.log("_________________________________________________________________________________");
console.log("Join method");
// JOIN 
// which joins all given path segments together using platform specific seperators as dilimitors and then normalises the resulting path

//joinign the paths 
console.log(path.join("folder1","folder2","index.html"));
console.log(path.join("/folder1","folder2","index.html"));
//  [ / for mac ] and [ \ for windows ]

//Normalising the paths

//will remove // here will only be /
console.log(path.join("/folder1","//folder2","index.html"));

//from folder 2 jump one folder up and concatinate the file name
console.log(path.join("/folder1","//folder2","../index.html"));

//this will give Absolte path to our data.json 
console.log(path.join(__dirname,"data.json"));


console.log("_________________________________________________________________________________________________");
console.log("resolve: ");
//resolve: will resolve sequence of paths as an absolute path

/*
    if we didnt give nay forward slash (/) THEN resplve will give the whole absolute path from root
    else if we did give / in out folders it will give absolute path from that folder

    if there are // later then itll give absolute path from there and fill ignore the folder that was before it 

*/
console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));

console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));

console.log(path.resolve(__dirname,"data.json"));

//revision sheet
// Built-in path module
const path = require("path");

// Current file & directory
console.log(__filename);   // Full path to this file
console.log(__dirname);    // Full path to current dir

// Extract base name
path.basename(__filename);     // => "index.js"
path.basename(__dirname);      // => "project"

// Extract extension
path.extname(__filename);      // => ".js"

// Parse full path into object
path.parse(__filename);        // { root, dir, base, ext, name }

// Rebuild path from parsed object
path.format(path.parse(__filename));

// Check if path is absolute
path.isAbsolute(__filename);   // => true
path.isAbsolute("./file.txt"); // => false

// Join paths safely (normalizes automatically)
path.join("folder", "file.txt");          // => "folder/file.txt"
path.join(__dirname, "data", "log.txt");  // => absolute safe path

// Resolve to absolute path
path.resolve("folder", "file.txt");       // => absolute from CWD
path.resolve(__dirname, "data.json");     // => absolute from __dirname

