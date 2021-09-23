let fs = require("fs");

console.log("Before");

fs.readFile("a1.txt" , cb);
function cb(err, data) {
    console.log("content " + data);
    fs.readFile("a2.txt", cb1);
}

function cb1(err, data) {
    console.log("Content " + data);
    fs.readFile("a3.txt", cb2);
}

function cb2(err, data) {
    console.log("content " + data);
}

console.log("After");