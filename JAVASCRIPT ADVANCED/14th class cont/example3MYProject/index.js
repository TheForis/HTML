const fileSystem = require('fs');

let files = fileSystem.readdirSync('./')
console.log(files);

const fileName = 'example.txt'; 
let text = 'Hello, this is some text to be written to the file example';

fileSystem.writeFile(fileName,text,function(err){
    if(err){
        console.error('Error while writing to file');
        return;
    }
    console.log('File has been written successfully');
});

fileSystem.readFile(fileName,'utf8', function(err,data){
    if(err){
        console.error('Error while reading the file');
        return;
    }
    console.log(`Content of the file: ${data}`);
})