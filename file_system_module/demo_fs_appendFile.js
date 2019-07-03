var fs = require('fs');


fs.appendFile('mynewfile1.txt', 'xxx', function (err) {
    if (err) {
        throw err;
    }
    console.log('saved!')

});