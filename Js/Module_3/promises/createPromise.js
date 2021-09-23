let fs = require("fs");

// implement
function myPromiseFsReadder(filePath) {
    // using this existing function
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}


// consumer
console.log("Before");

let freadPromise = myPromiseFsReadder("f1.txt");
console.log("Promise " , freadPromise);

freadPromise.then(function cb(data) {
    console.log("Data -> " + data);
})

freadPromise.catch(function cb(err) {
    console.log("err " + err);
})


console.log("After");

