let fs = require('fs');
let path = require('path');

let inputArr = process.argv.slice(2);
// console.log(inputArr);     ===> [
    // 'C:\\Users\\Purabi\\Desktop\\PEP_DEV\\Javascript\\Module_0\\Introduction - Array, String'
//   ]  

let inputDir = inputArr[0];
// console.log(inputDir);     ===>  C:\Users\Purabi\Desktop\PEP_DEV\Javascript\Module_0\Introduction - Array, String    

let allEntities = fs.readdirSync(inputDir);
// console.log(allEntities);  ===>  [ 'array.js', 'arrayAdvanced.js', 'string.js' ]

let content = "";

for(let i = 0; i < allEntities.length; i++) {
    let entityName = allEntities[i];
    // console.log(entityName); ====> array.js
                                //    arrayAdvanced.js
                                //    string.js


let fullPath = path.join(inputDir, entityName);
//     console.log(fullPath);
// C:\Users\Purabi\Desktop\PEP_DEV\Javascript\Module_0\Introduction - Array, String\array.js
// C:\Users\Purabi\Desktop\PEP_DEV\Javascript\Module_0\Introduction - Array, String\arrayAdvanced.js
// C:\Users\Purabi\Desktop\PEP_DEV\Javascript\Module_0\Introduction - Array, String\string.js

let statsOfAPath = fs.lstatSync(fullPath);

if(statsOfAPath.isFile()) {
    // console.log(fullPath);   
    
    let ext = path.extname(fullPath);
    // console.log(ext);    ===>
/*
    .txt
    .js
    .js
    .txt
    .js
*/

if(ext == ".txt") {
    content += fs.readFileSync(fullPath);
    // console.log(content);       ===>  
/*
        Hello, good morning
        Hello, good morningHello, Good Evenings,     
*/
                }
        }
}


let filePath = path.join(inputDir, "newCreatedFile.txt");
fs.writeFileSync(filePath, content);
console.log("fileCreated");