const path = require('path');
const unoconv = require('awesome-unoconv');
 
const sourceFilePath = path.resolve('./test_file.docx');
const outputFilePath = path.resolve('./myDoc.pdf');
 
unoconv
  .convert(sourceFilePath, outputFilePath)
  .then(result => {
    console.log(result); // return outputFilePath
  })
  .catch(err => {
    console.log(err);
  });