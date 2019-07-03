const fs = require('fs');

let readStream = fs.createReadStream('./demofile.txt');
readStream.on('open', fd => console.log("opened"));