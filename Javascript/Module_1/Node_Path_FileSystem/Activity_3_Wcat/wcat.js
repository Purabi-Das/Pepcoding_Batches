// const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
let fs = require("fs");

// INPUT
let inputArr = process.argv.slice(2);
// console.log(inputArr);

// OPTIONS
let optionArray = [];
let filesArray = [];

// IDENTIFY OPTIONS
for(let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == "-"){
        optionArray.push(inputArr[i]);
    }
    else {
        filesArray.push(inputArr[i]);
    }
}


// READ
// let content = "";
// for(let i = 0; i < filesArray.length; i++) {
//     let bufferContent = fs.readFileSync(filesArray[i]);
//     content += bufferContent + "\n";
// }
// console.log(content);


// let filesArray = inputArr;
for(let i = 0; i < filesArray.length; i++) {
    let ans = fs.existsSync(filesArray[i]);
    console.log(ans);
    if(ans == false) {
        console.log("file doesn't exist");
        return;
    }
}

let content = "";
for(let i = 0; i < filesArray.length; i++) {
    content += fs.readFileSync(filesArray[i]) + "\r\n";
}
// console.log(content);

 let contentArr = content.split("\r\n");
//  console.log(contentArr);

// S CHECK
let isSPresent = optionArray.includes("-s");
if(isSPresent == true) {
    for(let i = 1; i < contentArr.length; i++) {
        if(contentArr[i] == "" && contentArr[i - 1] == ""){
        contentArr[i] = null;
        }
        else if(contentArr[i] == "" && contentArr[i - 1] == null) {
        contentArr[i] = null;
        }
    }
    let tmparr = [];
    for(let i = 0; i < contentArr.length; i++) {
        if(contentArr[i] !== null) {
            tmparr.push(contentArr[i]);
        }
    }
    contentArr = tmparr;
}

 console.log(contentArr.join("\n"));

// N CHECK
// let isNPresent = optionArray.includes("-n");
// if(isNPresent == true) {
//     for(let i = 0; i < contentArr.length; i++) {
//         contentArr[i] = `${i + 1} ${contentArr[i]}`;
//     }
// }
// console.log(contentArr.join("\n"));

// B CHECK
// let isBPresent = optionArray.includes("-b");
// if(isBPresent == true) {
// let counter = 1;
//     for(let i = 0; i < contentArr.length; i++) {
//         if(contentArr[i] != "") {
//             contentArr[i] = `${counter} ${contentArr[i]}`;
//             counter++;
//         }
//     }
// }
// console.log(contentArr.join("\n"));


let indexOfN = optionArray.indexOf("-n");
let indexOfB = optionArray.indexOf("-b");
let finalOption = "";

// SOLVE WHETHER TO IMPLEMENT -N OR -S
if(indexOfN > -1  && indexOfB > -1) {
// BOTH ARE PRESENT
if(indexOfN < indexOfB) {
    finalOption = "-n";
}
else {
    finalOption = "-b";
}
}
else {
    // IS THERRE ANY OF OPTIONS PRESENT
    if(indexOfN > -1) {
        finalOption = "-n";
    }
    else if(indexOfB > -1) {
        finalOption = "-b";
    }
}

if(finalOption !== "") {
    if(finalOption == "-n") {
        modifyContentByN(contentArr);
    }
    else if(finalOption == "-b") {
        modifyContentByB(contentArr);
    }
}
// console.log("final option", final option);

function modifyContentByN(contentArr) {
    for(let i = 0; i < contentArr.length; i++) {
        contentArr[i] = `${i + 1} ${contentArr[i]}`; //counterArr[i] = (i + 1) + " " + counterArr[i];
    }
}
// console.log(contentArr.join("\n"));

function modifyContentByB(contentArr) {
    let counter = 1;
        for(let i = 0; i < contentArr.length; i++) {
            if(contentArr[i] != "") {
                contentArr[i] = `${counter} ${contentArr[i]}`; //or counterArr[i] = count + counterArr[i];
                counter++;
            }
        }
}
console.log(contentArr.join("\n"));