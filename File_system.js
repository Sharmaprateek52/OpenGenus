var fs = require('fs');


//Create a file Sync.
//fs.writeFileSync('mytext.txt',"hello world 3000!");

//Delete file Sync.
//fs.unlinkSync('mytext.txt');

//Create a file Async.
/*fs.writeFile('myText.txt',"hello world",(err) => {
    if(err) throw err;
    console.log("File has been saved!");
});*/

//Delete file Async.
/*fs.unlink('myText.txt',(err) => {
    if(err) throw err;
    console.log('myText.txt was deleted');
});*/

//Create a directory Sync.
//fs.mkdirSync('node');

//Delete directory Sync.
//fs.rmdirSync('node');

//Create a directory Async.
/*fs.mkdir('node',function(){
    fs.writeFileSync('./node/myText.txt',"Hello World!!");
});*/

//fs.unlink('./node/myText.txt',function(){
//    fs.rmdir('node');
//});