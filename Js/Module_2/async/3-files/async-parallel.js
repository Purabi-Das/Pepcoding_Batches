let fs = require("fs");

console.log("Before");

fs.readFile("a1.txt", cb);
fs.readFile("a2.txt", cb);
fs.readFile("a3.txt", cb);

function cb(err, data) {
    console.log("content " + data);
}

console.log("After");

