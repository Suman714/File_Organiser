function treeFn(dirPath){
    if (dirPath == undefined){
       treeHelper(process.cwd(), "");// cwd- current working directory. The process.cwd() method is an inbuilt application programming interface of the process module which is used to get the current working directory of the node.js process.
        return;

    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath, "");
        }else{
            console.log("kindly enter the correct path");
            return;
        }
    }
}
function treeHelper(dirPath, indent){
    //is file or a folder 
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    }else{
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i = 0; i<childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}
module.exports = {
    treeKey: treeFn
}