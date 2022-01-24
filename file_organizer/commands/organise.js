function organizeFn(dirPath){
    //1. innput -> directory path given 
    let destPath;
 
    if (dirPath == undefined){
        destPath = process.cwd();//The process.cwd() method is an inbuilt application programming interface of the process module which is used to get the current working directory of the node.js process.
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            //2. create  -> organize_files -> directory
         destPath = path.join(dirPath, "organized_files");
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
            }
 
        }else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath); 
 }
 
 function organizeHelper(dirPath, destPath){
     //3. identify categories of all the files present in that input directory ->
     let childNames = fs.readdirSync(dirPath);
     
     for (let i =0 ; i< childNames.length; i++){
         let childAdress = path.join(dirPath,childNames[i]);
         let isFile = fs.lstatSync(childAdress).isFile();
         if (isFile) {
             let category = getCategory(childNames[i]);
             console.log(childNames[i], "belongs to -->", category);
             // 4.  copy/cut files to that organized directory inside of any of the category folder
             sendFiles(childAdress, destPath, category);
         }
     }    
 }
 
 function getCategory(name){
             let ext = path.extname(name);
             ext = ext.slice(1);
             for(let type in types){
                 let cTypeArray = types[type];
                 for(let i = 0; i<cTypeArray.length; i++){
                     if(ext == cTypeArray[i]){
                         return type;
                     }
                 }
             }
             return "others";
 }
 function sendFiles(srcFile, dest, category){
     let categoryPath = path.join(dest, category);
     if(fs.existsSync(categoryPath)==flase){
         fs.mkdirSync(categoryPath);
     }
     let fileName = path.basename(srcFile);
     let destFilePath = path.join(categoryPath, fileName);
     fs.copyFileSync(srcFile, destFilePath);//for copying a folder with same name is created then the contents are copied
     fs.unlinkSync(srcFile);// for cut functionality the previous copy is deleted
 }
 module.exports ={
     organizeKey: organizeFn
 }