let fs = require("fs");

console.log("Before");


// // call back way of doing async task
// fs.readFile("f1.txt", function cb(err, data){
//     console.log("Data " + data);
// });


// promises --- >
let freadPromise = fs.promises.readFile("f1.txt");
console.log("Promise " + freadPromise);
// promise resolve

// function pass
freadPromise.then(function cb(data) {
    console.log("Data -> " + data);
})

// function pass reject
freadPromise.catch(function cb(err) {
    console.log("err " + err);
})


console.log("After");

