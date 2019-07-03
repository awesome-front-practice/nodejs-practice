var fs = require('fs');

fs.rename('mynewfile2.txt', "renamed.txt",function (err) {
    if (err) {
        throw err;
    }
    console.log('renamed!')
});