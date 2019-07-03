let fs = require('fs');
let formidable = require('formidable');

let http = require('http');

http.createServer((req, res) => {

    if (req.url === '/fileUpload') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (req, fields, files) {
            let oldPath = files.fileToUpload.path;
            let newPath = files.fileToUpload.name;
            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.log(err);
                    throw err;

                }

                res.write('File uploaded and moved!');
                return res.end();

            });


        });


    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileUpload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileToUpload"><br/>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }

}).listen(8080);