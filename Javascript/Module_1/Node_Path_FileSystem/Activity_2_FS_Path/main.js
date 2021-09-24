let inputArr = process.argv.slice(2);
// console.log(inputArr);

let helpObj = require("./help");
let treeObj = require("./tree");
let organizeObj = require("./organize");


let cmd = inputArr[0];
// console.log(cmd);

switch(cmd) {
    case "help":
        helpObj.helpFn();
        console.log("Help implemented");
        break;
        case "tree":
            treeObj.treeFn(inputArr[1]);
            console.log("tree implemented", inputArr[1]);
            break;
            case "organize":
                organizeObj.organizeFn(inputArr[1]);
                // console.log("organize implemented", inputArr[1]);
                break;
                default:
                    console.log(`Wrong command
                    Kindly enter to help to see all the commands`);
                    break;
}