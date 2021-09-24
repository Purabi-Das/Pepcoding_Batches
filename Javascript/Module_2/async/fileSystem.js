let fs = require("fs");

// let content = fs.readFileSysnc("cb(callBack).js");
// a js cant create an asymtonic function
// environment will give it to you

console.log("Before");

// ensured
// error first cbs -> by convention error is first parameter

fs.readFile("cb(callBack).js", cb);

function cb(err, data) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("content: "+ data);
    }
}

console.log("After");