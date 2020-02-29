const libre = require('libreoffice-convert');
 
const path = require('path');
const fs = require('fs');
 
const extend = '.pdf'
const FilePath = path.join(__dirname, './test_file.docx');
const outputPath = path.join(__dirname, `./example${extend}`);
 
// Read file
const enterPath = fs.readFileSync(FilePath);
// Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
libre.convert(enterPath, extend, undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }
    
    // Here in done you have pdf file which you can save or transfer in another stream
    fs.writeFileSync(outputPath, done);
});
