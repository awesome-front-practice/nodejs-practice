var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'xxxxx', function (err) {
    if (err) {
        throw err;
    }
    console.log('written!')
});