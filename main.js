const dcmjs = require("dcmjs");
const fs = require('fs');
fs.readFile('IM-0001-0001.dcm', (err, data)=>{
  let dicomData = dcmjs.data.DicomMessage.readFile(data);
});
