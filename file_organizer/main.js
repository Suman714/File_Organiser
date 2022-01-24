#!/usr/bin/env node
//above line lets Os know in which environmaent it will run to globalise the code
let inputArr= process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organise");
let command = inputArr[0];
let types = {
    media: ["mp4","mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documenta: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[i]);
        break;
    case "help":
        helpObj.helpkey();
        break;
    default: 
        console.log("Please input right command");
        break;
}










