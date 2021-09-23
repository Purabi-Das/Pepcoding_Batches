let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];

// let firstModule = inputArr[1];
// let secondModule = inputArr[2];
// let thirdModule = inputArr[3];

let cwd = process.cwd();
let mainDirPath = path.join(cwd, mainDir);

// let firstModulePath = path.join(cwd, firstModule);
// let secondModulePath = path.join(cwd, secondModule);
// let thirdModulePath = path.join(cwd, thirdModule);

// console.log(mainDirPath);
// console.log(firstModulePath);
// console.log(secondModulePath);
// console.log(thirdModulePath);

let ismainModulePresent = fs.existsSync(mainDirPath);
if(ismainModulePresent) {
    console.log("Directory is already created");
    return;
}
else {
    console.log(mainDir, "created");
    fs.mkdirSync(mainDirPath);
    let topicFromInput = inputArr.slice(1, 4);
    for(let i = 0; i < topicFromInput.length; i++) {
        let currentTopicPath = path.join(mainDirPath, topicFromInput[i]);
        console.log(topicFromInput[i], "created");
        fs.mkdirSync(currentTopicPath);

        for(let j = 1; j <= 5; j++) {
            let modulePath = path.join(currentTopicPath, "Module" + j);
            fs.mkdirSync(modulePath);
            console.log("Module" + j , "created inside ", topicFromInput[i]);
            let filePath = path.join(modulePath, "content.md");
            fs.writeFileSync(filePath, " Hello"); 
        }
    }
}
