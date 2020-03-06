const express = require('express');
var app = express();
var upload = require('express-fileupload');
var docxConverter = require('docx-pdf');
var path = require('path');

const extend_pdf = '.pdf'
const extend_docx = '.docx'

var down_name

app.use(upload());

 
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})
app.post('/upload',function(req,res){
  console.log(req.files);
  if(req.files.upfile){
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    //File where .docx will be downloaded  
    var uploadpath = __dirname + '/uploads/' + name;
    //Name of the file --ex test,example
    const First_name = name.split('.')[0];
    down_name = First_name;
    console.log(down_name);
    console.log(uploadpath);
    file.mv(uploadpath,function(err){
      if(err){
        console.log(err);
      }else{
        //Path of the downloaded or uploaded file
        var initialPath = path.join(__dirname, `./uploads/${First_name}${extend_docx}`);
        //Path where the converted pdf will be placed/uploaded
        var upload_path = path.join(__dirname, `./uploads/${First_name}${extend_pdf}`);
        console.log(initialPath);
        docxConverter(initialPath,upload_path,function(err,result){
        if(err){
          console.log(err);
        }
        console.log('result'+result);
        res.sendFile(__dirname+'/down_html.html')
        });
      }
    });
  }else{
    res.send("No File selected !");
    res.end();
  }
});

app.get('/download', (req,res) =>{
  res.download(__dirname +`/uploads/${down_name}${extend_pdf}`,`${down_name}${extend_pdf}`)
})

app.listen(3000,() => {
    console.log("Server Started at port 3000...");
})


    //file.mv(uploadpath,function(err){
      //if(err){
        //console.log("File Upload Failed",name,err);
        //res.send("Error Occured!")
      //}else{
        //res.send('Done!');
        //console.log("File Uploaded",name);
      //}
    //});