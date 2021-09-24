let fs = require("fs");

console.log("Before");

let content = fs.readFileSync("a1.txt");
console.log("content " + content);

content = fs.readFileSync("a2.txt");
console.log("content " + content);

content = fs.readFileSync("a3.txt");
console.log("content " + content);

console.log("After");


