let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'png'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organize(srcPath){
    if(srcPath == undefined) {
        srcPath = process.cwd();
    }
    // console.log("organizr implemented");
    // create organized files
    let organizedFilesPath = path.join(srcPath, "organized_files");
    if(fs.existsSync(organizedFilesPath) == false) {
        fs.mkdirSync(organizedFilesPath);
    }
    // scan whole srcFilePath ->extension check
    let allTheFiles = fs.readdirSync(srcPath);
    // console.log(allTheFiles);

    // extension check - classify
    for(let i = 0; i < allTheFiles.length; i++) {
        let fullOriginalPath = path.join(srcPath,allTheFiles[i]);
        if(fs.lstatSync(fullOriginalPath).isFile() == true) {
        let folderName = checkExtTellFolder(allTheFiles[i]);
        // console.log(allTheFiles[i], "will go to ", folderName);
        copyFileToDest(folderName, fullOriginalPath, srcPath);
    }
}
    // copy to ths folder to which it belongs 
    // folder
    // file copy
    //  other
    // file copy
}

function copyFileToDest(folderName, fullOriginalPath, srcPath) {
    let destFolderPath = path.join(srcPath, "organized_files", folderName);
    if(fs.existsSync(destFolderPath) == false) {
        fs.mkdirSync(destFolderPath);
    }
    let originalFileName = path.basename(fullOriginalPath);
    let destFilePath = path.join(destFolderPath, originalFileName);
    fs.copyFileSync(fullOriginalPath, destFilePath);
    console.log(originalFileName, "copied to", folderName);
}

function checkExtTellFolder(fileName) {
    let extName = path.extname(fileName);
    extName = extName.slice(1);
    for(let key in types) {
        for(let i = 0; i < types[key].length; i++) {
            if(types[key][i] == extName) {
                return key;
            }
        }
    }
    return "others";
}

module.exports = {
    organizeFn: organize
}