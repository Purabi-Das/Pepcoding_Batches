let fs = require("fs");
let path = require("path");

let srcFilePath = "C:\\Users\\Purabi\\Desktop\\PEP_DEV\\Javascript\\Module_0\\Introduction - Array, String\\array.js";
let destFilePath = "C:\\Users\\Purabi\\Desktop\\PEP_DEV\\Javascript\\Module_0\\Introduction - Array, String";

let toBeCopiedFileName = path.basename(srcFilePath);
// console.log(toBeCopiedFileName);     ===>  array.js
let destnPath = path.join(destFilePath, toBeCopiedFileName);
fs.copyFileSync(srcFilePath, destnPath);
console.log("File copied successfully");