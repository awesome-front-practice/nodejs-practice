const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    let vUrl = req.url;
    let urlWithStringQuery = url.parse(vUrl, true);
    let pathname = "." + urlWithStringQuery.pathname;
    console.log(pathname);
    fs.readFile(pathname, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end("error:" + err);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

}).listen(8080);