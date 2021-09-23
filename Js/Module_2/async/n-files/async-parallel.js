let fs = require("fs");

let files = ["f1.txt", "f2.txt"];

console.log("Before");

// for(let i  = 0; i < files.length;) {
//     console.log("i " + i);
//     fs.readFile(files[i], function cb(err, data) {
//         console.log("data" + data);
//         i++;
//     })
//     // i++; //we cant do this bcz it is similar to paraller code
// }


function SerialReader(i) {
    if(i == files.length) {
        return;
    }

    fs.readFile(files[i], function cb(err, data) {
        console.log("data " + data);
        SerialReader(i + 1);
    });
}

SerialReader(0);

console.log("After");