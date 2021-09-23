let fs = require("fs");
let path = require("path");

// function tree(srcPath){
//     console.log("tree implemented");
// }

function tree(srcPath) {
    if(srcPath == undefined) {
        srcPath = process.cwd();
        console.log("tree command", srcPath);
    }

    let content = fs.readdirSync(srcPath);
    console.log(content);

    // |__
    // |--

    let parentFolderName = path.basename(srcPath);
    let completePath = "|__" + parentFolderName;
    for(let i = 0; i < content.length; i++) {
        completePath = completePath + "\n\t" + "|--" + content[i];
    }
    console.log(completePath);
}

module.exports = {
    treeFn: tree
}