const fs = require('fs');
const fsAsync = require ('fs/promises');

console.log("Running");

//Function Definition
const readSync = () => {
    try{
        const data = fs.readFileSync('example.txt', 'utf-8');
        
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}

//Read file synchronosly using fs.readFileSync
const read = async () => {
   try{
    const data = await fsAsync.readFile('example.txt', 'utf-8');
    console.log(data);
   }
   catch(error){
    console.error(error);
   } 
}

const write = async () => {
    try{
        await fsAsync.writeFile('example.txt', "GERALD");
    }
    catch(error)
    {
        console.log(error);
    }
}

//Write to file synchronosly using fs.writeFileSync
const writeSync = () => {
    try{
        fs.writeFileSync('example.txt', "GERALD");
    }
    catch(error){
        console.log(error);
    }
}

const append = async () => {
    try{
        await fsAsync.appendFile('example.txt', "Raj")
    }
    catch(error){
        console.log(error);
    }
}

//Append to file synchronosly using fs.appendFileSync
const appendSync = () => {
    try{
        fs.appendFileSync('example.txt', "Raj");
    }
    catch(error){
        console.log(error);
    }
}

const deletefile = async () =>{
    try{
        await fsAsync.unlink('example.txt');
    }
    catch(error){
        console.log(error);
    }
}

//Delete file synchronosly using fs.unlinkSync
const deletefileSync = () => {
    try{
        fs.unlinkSync('example.txt');
    }
    catch(error){
        console.log(error);
    }
}

const rename = async () => {
    try{
        await fsAsync.rename(`example.txt`, 'example1.txt');

    }catch(error){
        console.log(error);
    }
}
//This is applicable to folder as well
//Rename file synchronosly using fs.renameSync
const renameSync = () => {
    try{
        fs.renameSync('example.txt', 'example1.txt');
    }
    catch(error){
        console.log(error);
    }
}

const readDIR = async () => {
    try{
        const files = await fsAsync.readdir('./');
        console.log(files);
    }
    catch(error){
        console.log(error);
    }
}
//Read directory synchronosly using fs.readdirSync
const readDIRSync = () => {
    try{
        const files = fs.readdirSync('./');
        console.log(files);
    }
    catch(error){
        console.log(error);
    }
}

const createDIR = async () => {
    try{
        await fsAsync.mkdir('folder'); // await fsSync.mkdir('/root/folder', {recursive: true}); --- This will create the root folder if it does not exist
    }
    catch(error){
        console.log(error);
    }
}

//Create directory synchronosly using fs.mkdirSync  
const createDIRSync = () => {
    try{
        fs.mkdirSync('folder');
    }
    catch(error){
        console.log(error);
    }
}

const deleteDIR = async () => {
    try{
        await fsAsync.rmdir('folder');
    }
    catch(error){
        console.log(error);
    }
}

//Delete directory synchronosly using fs.rmdirSync
const deleteDIRSync = () => {
    try{
        fs.rmdirSync('folder');
    }
    catch(error){
        console.log(error);
    }
}

const copyfile = async () => {
    try{
        await fsAsync.copyFile('example1.txt', 'example.txt');//await fsAsync.copyFile('example1.txt', 'example.txt',fs.constants.COPYFILE_EXCL); --- THIS WILL COPY THE FILE ONLY IF IT DOES NOT EXIST
    }
    catch(error){
        console.log(error);
    }
}

//Copy file synchronosly using fs.copyFileSync
const copyfileSync = () => {
    try{
        fs.copyFileSync('example1.txt', 'example.txt');
    }
    catch(error){
        console.log(error);
    }
}

//MOVING A FILE OR FOLDER
const move = async () => {
    try{
        await fsAsync.rename('example.txt', 'folder/example.txt');
    }
    catch(error){
        console.log(error);
    }
}
//Move file synchronosly using fs.renameSync
const moveSync = () => {
    try{
        fs.renameSync('example.txt', 'folder/example.txt');
    }
    catch(error){
        console.log(error);
    }
}

//Check the file or folder exists
const check = async () => {
    try{
        await fsAsync.access('example.txt',fs.constants.F_OK); // fs.constants.F_OK - Check if the file exists regardless of the read or write permissions
        console.log('File exists');
    }
    catch(error){
        console.log('File does not exist');
    }
}

//Check file or folder synchronosly using fs.accessSync
const checkSync = () => {
    try{
        fs.accessSync('folder');
        console.log('File exists');
    }
    catch(error){
        console.log('File does not exist');     
    }
}

//Function Call
check();